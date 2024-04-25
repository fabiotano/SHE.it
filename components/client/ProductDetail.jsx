import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";

function ProductCard(props) {
  const { product } = props;
  return (
    <div className="container">
      <div className="text-2xs py-2 pl-3">
        <p>
          <Link href={"/"}>Inicio</Link> /{" "}
          <span className="text-gray-300">Parrucchieria/ Producto</span>
        </p>
      </div>

      <div className="flex items-center justify-center block sm:hidden">
        <img
          src={product.brandLogo}
          className="object-contain h-16 sm:h-18"
          alt="Logo"
        />
      </div>

      <div className="sm:flex sm:gap-8 w-full max-w-[350px] sm:max-w-none m-auto sm:justify-evenly my-16">
        <div className="relative flex-shrink-0 border sm:w-[300px] h-[280px] sm:h-[350px] ">
          
          <Image
            src={product.image}
            alt=""
            fill
            className="object-contain p-2"
          />
        </div>

        <div className="w-full sm:w-[500px] relative flex flex-col justify-between">
          <div>
            <h3 className="text-center font-semibold text-md sm:text-2xl mt-3">
              {product.title}
            </h3>
            <h3 className="text-center text-sm sm:text-xl mt-1">
              {product.format}
            </h3>
            <h3 className="border-b-0 text-center font-italic text-xs pt-2 sm:pt-0 text-gray-600">
              {product.subCategory}
            </h3>
            <h6 className="text-center text-xs sm:text-md text-gray-400">
              {/* {product.desc} */}
            </h6>
            <h4 className="text-center font-bold text-md sm:text-lg mt-3">
              &euro;
              {` ${Math.floor(product.price)}`}
              <sup>{(product.price % 1).toFixed(2).substring(2)}</sup>
            </h4>
            <h3 className="text-justify bg-red-100 break-all mt-4 px-6 py-2">
              TTTESTTTESTTESTTTTESTTTESTTESTTTTESTTTESTTEST
              TTTESTTTESTTESTTTTESTTTESTTESTTTTESTTTESTTEST
              TTTESTTTESTTESTTTTESTTTESTTESTTTTESTTTESTTEST
              TTTESTTTESTTESTTTTESTTTESTTESTTTTESTTTESTTEST
            </h3>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faHeart}
              className={`absolute top-0 right-0 mt-2 mr-2 z-50 h-6 cursor-pointer ${
                product.favorite ? "text-red-400" : "text-gray-400"
              }`}
            />
            <div className="sm: absolute sm: top-0 sm:left-0 sm:z-50 flex items-center justify-center sm:block hidden">
              <img
                src={product.brandLogo}
                className="object-contain h-10 sm:h-12"
                alt="Logo"
              />
            </div>
            <form action="" className="flex px-1 mt-5 sm:m-5 gap-4">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-900 dark:text-gray-400 mr-1"
              >
                <select
                  id="quantity"
                  className="border border-gray-300 text-gray-900 text-sm rounded-sm block w-16 h-full text-start"
                  defaultValue="1" // Establecer el valor predeterminado aquí
                >
                  <option disabled>Qnt.</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </label>
              <button
                type="submit"
                className="bg-black text-white w-full h-11 rounded-sm text-sm md:text-sm hover:bg-blue-400"
              >
                <FontAwesomeIcon icon={faCartShopping} className="mx-2" />
                Agregar al carrito
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
