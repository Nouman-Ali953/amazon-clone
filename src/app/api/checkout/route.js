import { NextResponse } from "next/server";

const stripe = require("stripe")(
  "sk_test_51LhzE8I6wVwKALkiY7vXTHzN45Cw7LKnftArSo0WVZ6WjrYhGEW1uvIujWKu5kcjuXomNIo7XxB1nAyXUWmeANXa00aS4UM73u"
);

export const POST = async (req) => {
  try {
    // const { items } = req.body;
    const { items , amount} = await req.json()
    const modifiedItems = items?.map((item) => ({
      quantity: 1,
      price_data: {
        currency: "usd",
        unit_amount: amount * 100,
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.image],
        },
      },
    }));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: modifiedItems,
      mode: "payment",
      success_url: `http://localhost:3000/success`,
      cancel_url: `http://localhost:3000/return`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
};

export const GET = async (req) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(
      req.query.session_id
    );

    return NextResponse.json({
      status: session.status,
      customer_email: session.customer_details.email,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
};
