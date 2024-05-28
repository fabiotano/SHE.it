"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function ProductCard(props) {
  const { product } = props;
  return (
    <div className="container">
      {/* Breadcrumb Navigation */}
      <div className="text-2xs py-2 pl-3">
        <p>
          <Link href="/">Inicio</Link> /{" "}
          <span className="text-gray-300">Parrucchieria/ Producto</span>
        </p>
      </div>

      {/* Logo for mobile view */}
      <div className="flex items-center justify-center md:hidden">
        <img
          src={product.brandLogo}
          className="object-contain h-16 sm:h-18"
          alt="Logo"
        />
      </div>

      {/* Main content area */}
      <div className="md:grid grid-cols-1 md:grid-cols-2 md:gap-8 w-full md:max-w-none mx-auto md:justify-evenly mb-4 md:mt-6">
        {/* Product image with magnify feature */}
        <div className="relative max-w-[350px] m-auto flex-shrink-0 justify-center mt-4 md:mt-20 items-center border md:w-[350px] md:h-[350px]">
          <div className="flex items-center justify-center h-full">
            <div className="object-cover">
              <img
                src={product.image}
                className="object-cover w-full h-full"
                alt="Product"
              />
            </div>
          </div>
        </div>

        {/* Product details */}
        <div className="w-full m-auto relative flex flex-col justify-between">
          <div>
            <h3 className="text-center font-semibold text-md md:text-xl mt-3">
              {product.title}
            </h3>
            <h3 className="text-center text-sm md:text-xl mt-1">
              {product.format}
            </h3>
            <h3 className="border-b-0 text-center font-italic text-xs pt-2 md:pt-0 text-gray-600">
              {product.subCategory}
            </h3>
            <h6 className="text-center text-xs md:text-md text-gray-400">
              {/* {product.desc} */}
            </h6>
            <h4 className="text-center font-bold text-xl mt-3">
              &euro;
              {` ${Math.floor(product.price)}`}
              <sup>{(product.price % 1).toFixed(2).substring(2)}</sup>
            </h4>
          </div>

          {/* Product description */}
          <div>
            <p className="max-w-[600px] m-auto text-justify bg-gray-50 break-all mt-4 px-8 py-4 leading-8">
              Disfruta de una experiencia de sonido superior con los auriculares
              inalámbricos Bluetooth Pro. Con tecnología de cancelación de ruido
              activa, estos auriculares te permiten sumergirte en tu música sin
              distracciones. Su diseño ergonómico y ligero asegura comodidad
              durante horas de uso. Su diseño ergonómico y ligero asegura comodidad
              durante horas de uso.
            </p>
          </div>

          {/* Favorite icon and brand logo for larger screens */}
          <div>
            <FontAwesomeIcon
              icon={faHeart}
              className={`absolute top-0 right-0 mt-2 mr-2 z-50 h-6 cursor-pointer ${
                product.favorite ? "text-red-400" : "text-gray-400"
              }`}
            />
            <div className="md:absolute md:top-0 md:left-0 md:z-50 items-center justify-center md:block hidden">
              <img
                src={product.brandLogo}
                className="object-contain h-10 md:h-12"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add to cart form */}
      <form
        action=""
        className=" max-w-[600px] m-auto flex px-8 md:px-2 my-4 md:my-8 md:mr-6 gap-4 md:max-w-[550px] md:m-auto"
      >
        <label
          htmlFor="quantity"
          className="block text-sm font-medium text-gray-900 dark:text-gray-400 mr-1"
        >
          <select
            id="quantity"
            className="border border-gray-300 text-gray-900 rounded-md text-sm block w-16 h-full text-start"
            defaultValue="1"
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
          className="bg-black text-white w-full h-11 rounded-md text-sm md:text-sm hover:bg-blue-400"
        >
          <FontAwesomeIcon icon={faCartShopping} className="mx-2" />
          Agregar al carrito
        </button>
      </form>
    </div>
  );
}

export default ProductCard;
