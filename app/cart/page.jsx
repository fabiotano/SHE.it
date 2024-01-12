import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  return (
    <div className="container">
      <div className="text-2xs py-2 pl-3">
        <p>
          <Link href={"/"}>Carrito</Link>
        </p>
      </div>
      <div className="sm:flex">
        <section className="mt-6 flex-grow">
          <h2 className="text-5xl font-bold text-center">Carrito</h2>
            <ul className="my-6 m-auto p-4 flex flex-col flex-wrap justify-center">
                <li className="py-4 border-b flex flex-auto gap-1">
                    <div className="flex-auto basis-1/6 border-right flex justify-center">
                    <img
                        src="/products/image-1.jpg"
                        alt="Product Image"
                        style={{ width: "112px", height: "112px" }}
                    />
                    </div>  
                    <div className="flex flex-col basis-1/2 flex-auto justify-between">
                    <h2 className="text-sm text-gray-900">CARMEN TT DEVELOPER</h2>
                    <h3 className="text-xs text-gray-500 pt-1">5-9-15 VOL 1000 ML</h3>
                    <p className="pt-2">$12.67</p>
                    <div className="grid grid-cols-3 pt-3">
                        <form className="flex justify-left">
                        <input
                            type="button"
                            value="-"
                            id={`qty-minus`}
                            className="w-5 border flex-shrink-0"
                        />
                        <input
                            type="text"
                            id={`quantity`}
                            className="w-8 text-center border flex-shrink-0"
                            name="quantity"
                            value={"1"}
                        />
                        <input
                            type="button"
                            value="+"
                            id={`qty-plus`}
                            className="w-5 border flex-shrink-0"
                        />
                        </form>
                        <p className="font-semibold text-center text-md">12.67</p>
                        <div className="text-center">
                        <FontAwesomeIcon icon={faTrash} />
                        </div>
                    </div>
                    </div>
                </li>
                <li className="py-4 border-b flex flex-auto gap-1">
                    <div className="flex-auto basis-1/6 border-right flex justify-center">
                    <img
                        src="/products/image-1.jpg"
                        alt="Product Image"
                        style={{ width: "112px", height: "112px" }}
                    />
                    </div>  
                    <div className="flex flex-col basis-1/2 flex-auto justify-between">
                    <h2 className="text-sm text-gray-900">CARMEN TT DEVELOPER</h2>
                    <h3 className="text-xs text-gray-500 pt-1">5-9-15 VOL 1000 ML</h3>
                    <p className="pt-2">$12.67</p>
                    <div className="grid grid-cols-3 pt-3">
                        <form className="flex justify-left">
                        <input
                            type="button"
                            value="-"
                            id={`qty-minus`}
                            className="w-5 border flex-shrink-0"
                        />
                        <input
                            type="text"
                            id={`quantity`}
                            className="w-8 text-center border flex-shrink-0"
                            name="quantity"
                            value={"2"}
                        />
                        <input
                            type="button"
                            value="+"
                            id={`qty-plus`}
                            className="w-5 border flex-shrink-0"
                        />
                        </form>
                        <p className="font-semibold text-center">12.67</p>
                        <div className="text-center">
                        <FontAwesomeIcon icon={faTrash} />
                        </div>
                    </div>
                    </div>
                </li>
            </ul>
            {/* <button className="border mt-5 p-1 border border-gray-800">Continuar comprando</button> */}
        </section>
      </div>
    </div>
  );
};

export default Cart;
