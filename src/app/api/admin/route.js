import connect from "@/database/connect";
connect();
import Admin from "@/models/admin.model";
import bcrypt from "bcrypt";
export async function POST(request) {
  try {
    const data = await request.json(); // Assign the request body to the data variable
    const { username, password } = data;
    const user = await Admin.findOne({ username: username });
    const hashedPassword = bcrypt.compareSync(password, user.password);

    const userToSend = user.username;
    const token = 'afgfagafgfgdfgfgjh43h543htrj43hjtrb34hjb34hjb'
    return Response.json({
      userToSend,
      status: 200,
      token : token,
      message: "user saved successfully",
    }); // Send a JSON response with the data
  } catch (error) {
    return Response.json({ status: 500, message: "something went wrong" });
  }
}
