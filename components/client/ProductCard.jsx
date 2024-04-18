import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";

function ProductCard(props) {
  const { product } = props;
  return (
    <Link
      href={`/products/${product.id}`}
      className="relative w-[240px] h-[310px] sm:w-[210px] sm:h-[350px] bg-white border rounded-md m-auto"
    >
      <div className="w-14 flex items-center justify-center rounded-full ml-1">
        <img src={product.brandLogo} className="object-contain" alt="Logo" />
      </div>

      <h3 className="border-t border-gray-100 border-b-0 text-center font-italic text-xs pt-2 text-gray-600">
        {product.subCategory}
      </h3>

      {product.newFlag && (
        <div className="absolute top-1/2 bg-red-400 sm:-translate-x-1/4 w-14 h-7 text-white text-xs font-bold flex justify-center items-center z-50">
          Nuevo!
        </div>
      )}
      <FontAwesomeIcon
        icon={faHeart}
        className={`absolute top-1 right-1 z-50 h-6 cursor-pointer ${
          product.favorite ? "text-red-400" : "text-gray-400"
        }`}
      />
      <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] m-auto mt-6">
        <Image
          src={product.image}
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <h3 className="text-center font-semibold text-md mt-3">
        {product.title}
      </h3>
      <h3 className="text-center text-sm mt-1">{product.format}</h3>
      <h6 className="text-center text-xs text-gray-400">{product.desc}</h6>
      <h4 className="text-center font-bold mt-3">
        &euro;
        {` ${Math.floor(product.price)}`}
        <sup>{(product.price % 1).toFixed(2).substring(2)}</sup>
      </h4>
    </Link>
  );
}

export default ProductCard;
