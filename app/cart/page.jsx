"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import {
  faTrash,
  faPersonRunning,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const initialProducts = [
  {
    id: 1,
    title: "Product 1",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/products/image-1.jpg",
    newFlag: true,
    price: 979.14,
    discount: 5,
    favorite: true,
    volume: "1000 ml",
    stock: 10,
  },
  {
    id: 2,
    title: "Product 2",
    desc: "Brief description",
    image: "/products/image-2.jpg",
    newFlag: false,
    price: 364.29,
    discount: 10,
    favorite: false,
    volume: "1000 ml",
    stock: 10,
  },
  {
    id: 3,
    title: "Product 3",
    desc: "Brief description",
    image: "/products/image-3.jpg",
    newFlag: false,
    price: 936.77,
    discount: 10,
    favorite: false,
    volume: "1000 ml",
    stock: 10,
  },
];

const Cart = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleDeleteProduct = (productId) => {
    const newProductsArray = products.filter(
      (product) => productId !== product.id
    );
    setProducts(newProductsArray);
  };

  const [productQuantity, setProductQuantity] = useState([
    { productId: 1, quantity: 1 },
    { productId: 2, quantity: 2 },
    { productId: 3, quantity: 5 },
  ]);

  const increaseQuantity = (id) => {
    setProductQuantity((prevProductQuantity) => {
      return prevProductQuantity.map((product) => {
        if (product.productId === id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    });
  };

  const decreaseQuantity = (id) => {
    setProductQuantity((prevProductQuantity) => {
      return prevProductQuantity.map((product) => {
        if (product.productId === id) {
          if (product.quantity > 1)
            return { ...product, quantity: product.quantity - 1 };
        }
        return { ...product, quantity: 1 };
      });
    });
  };

  return (
    <div className="container">
      <div className="text-2xs py-2 pl-3">
        <p>
          <Link href={"/"}>Carrito</Link>
        </p>
      </div>
      <h2 className="text-5xl font-bold text-center">Carrito</h2>
      <section className="mt-6 flex-grow md:flex">
        <ul className="mt-6 mx-4 flex-auto flex flex-col flex-wrap justify-center md:mb-4">
          {products.map((product) => (
            <li key={product.id} className="py-4 border-b flex flex-auto gap-1">
              <div className="flex-auto basis-1/6 border-right flex justify-center">
                <img
                  src="/products/image-1.jpg"
                  alt="Product Image"
                  style={{ width: "112px", height: "112px" }}
                />
              </div>
              <div className="flex flex-col basis-1/2 flex-auto justify-between">
                <h2 className="text-sm text-gray-900">{product.title}</h2>
                <h3 className="text-xs text-gray-500 pt-1">{product.desc}</h3>
                <p className="pt-2">$ {product.price}</p>
                <div className="grid grid-cols-3 pt-3">
                  <form className="flex justify-left">
                    <input
                      type="button"
                      value="-"
                      id={product.id}
                      className="w-5 border flex-shrink-0"
                      onClick={() => decreaseQuantity(product.id)}
                      min={1}
                    />
                    <input
                      type="text"
                      id={product.id}
                      className="w-8 text-center border flex-shrink-0"
                      name="quantity"
                      value={
                        productQuantity.find(
                          (productItem) => productItem.productId === product.id
                        )?.quantity || 0
                      }
                      readOnly
                    />
                    <input
                      type="button"
                      value="+"
                      id={product.id}
                      className="w-5 border flex-shrink-0"
                      onClick={() => increaseQuantity(product.id)}
                      max={product.stock}
                    />
                  </form>
                  <p className="font-semibold text-center text-md">
                    {product.price}
                  </p>
                  <div className="text-center">
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleDeleteProduct(product.id)}
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}

          <button className="hover:bg-gray-200 mx-8 border border border-gray-400 text-sm px-5 py-2 mt-3 mb-5">
            {" "}
            <FontAwesomeIcon
              icon={faPersonRunning}
              flip="horizontal"
              className="mr-2"
            />{" "}
            Seguir comprando
          </button>
        </ul>
        <div className="mx-12 my-8 flex-auto h-fit border border-gray-600 md:mr-5">
          <ul className="px-3 text-left mt-2">
            <li className="my-1">
              <p className="text-black inline-block text-xs">3 Artículos</p>
              <p className="text-black inline-block float-right text-xs">100</p>
            </li>
            <li className="my-1">
              <p className="text-black inline-block text-xs">3 Artículos</p>
              <p className="text-black inline-block float-right text-xs">100</p>
            </li>
            <li className="my-1">
              <p className="text-black inline-block text-xs">3 Artículos</p>
              <p className="text-black inline-block float-right text-xs">100</p>
            </li>
            <li className="my-1">
              <p className="text-black inline-block text-xs">3 Artículos</p>
              <p className="text-black inline-block float-right text-xs">100</p>
            </li>
          </ul>
          <div className="px-3 py-2 border-t">
            <p className="text-black font-semibold inline-block ">TOTAL</p>
            <p className="text-black inline-block font-semibold float-right text-sm">
              100
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
