import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

function ProductCard(props) {
  const { product } = props;
  
  return (
    <Link
      href={`/products/${product.id}`}
      className="bg-white border-b border-x border-b-gray-100 border-x-gray-100 rounded-md hover:bg-gray-100 w-1/3 max-w-[250px] mx-auto flex-wrap flex-grow relative group transform transition-transform duration-300 hover:-translate-y-2"
    >
      {/* LOGO */}
      <div className="z-10 flex items-center justify-center absolute top-1 left-1">
      {(() => {
                    if (product.brand == "She") {
                      return (
                        <img
                          src="/brands/1.svg"
                          alt="She Logo"
                          className="w-16"
                        />
                      );
                    } else if (product.brand == "Eugeneperma") {
                      return (
                        <img
                          src="/brands/2.svg"
                          alt="Eugeneperma Logo"
                          className="w-16"
                        />
                      );
                    } else if (product.brand == "Chenice") {
                      return (
                        <img
                          src="/brands/3.svg"
                          alt="Chenice Logo"
                          className="w-16"
                        />
                      );
                    } else {
                      return <span>Unknown Brand</span>; // Opcional: para manejar casos no previstos
                    }
                  })()}      </div>

      {/* FAV */}
      {product.newFlag && (
        <div className="absolute top-1/2 bg-red-400 sm:-translate-x-1/4 w-14 h-7 text-white text-xs font-bold flex justify-center items-center z-50">
          Nuevo!
        </div>
      )}
      <FontAwesomeIcon
        icon={faHeart}
        className={`absolute top-1 right-1 z-50 h-6 cursor-pointer text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          product.favorite ? "text-red-400" : "text-gray-400"
        }`}
      />

      {/* IMAGE */}
      <div className="relative pb-[100%] mt-2">
        <img
          src={product.image_url}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full p-4 h-full object-contain"
        />
      </div>

      {/* PRODUCT INFO */}
      <div className="flex flex-row items-center justify-between rounded-md p-2">
        <div className="">
          <h3 className="text-xs font-semibold text-gray-700">
            {product.name} {product.format}{" "}
          </h3>
        </div>

        <div className="w-1/3 ml-2 text-center">
          {/* <h4 className="text-md font-bold text-gray-900">
            &euro;{Math.floor(product.price)}
            <sup>{(product.price % 1).toFixed(2).substring(2)}</sup>
          </h4> */}
          <h4 className="text-md font-semibold text-gray-700">
          €{product.price}
          </h4>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
