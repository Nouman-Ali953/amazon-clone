"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./product.module.scss";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/redux/actions/productActions";
import { addToCart, emptyCart } from "@/redux/actions/cartActions";
import LoadingSpinner from "../loading/LoadingSpinner";
import { addFavourite } from "@/redux/actions/favouriteActions";
const Products = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    getApiData();
  }, []);
  const getApiData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://fakestoreapiserver.reactbd.com/tech"
      );

      setProductData(res.data);
      setIsLoading(false);
      return res;
    } catch (error) {
      console.log("error while fetching data", error.message);
    }
  };
  const addItems = (product) => {
    dispatch(addToCart(product));
  };
  const addFavouriteItems = (product) => {
    dispatch(addFavourite(product));
  };

  return (
    <>
      {isLoading === true ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.container}>
          {productData?.map((product) => (
            <div className={styles.wrapper} key={product._id}>
              <Image src={product.image} width={201} height={250} alt="im" />
              <hr />
              <div className={styles.posDiv}>
                <span onClick={() => addItems(product)}>
                  <HiShoppingCart />
                </span>
                <span onClick={() => addFavouriteItems(product)}>
                  <FaHeart />
                </span>
              </div>
              <div className={styles.innerDiv}>
                <p
                  style={{ color: "gray", fontSize: "13px", marginTop: "-9px" }}
                >
                  {product.category}
                </p>
                <p style={{ marginTop: "4px" }}>{product.title}</p>
                <p
                  style={{
                    marginTop: ".5rem",
                    color: "gray",
                    fontSize: "13px",
                    marginBottom: "3px",
                  }}
                >
                  {product.description.substring(0, 120)}
                </p>
                <p
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "7px",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  {product.price}$
                </p>
              </div>
              <button onClick={() => addItems(product)}>add to cart</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
