import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

function ProductCard(props) {
  const { product } = props;

  return (
    <Link
      href={`/products/${product.id}`}
      className="relative flex flex-col items-center group transform transition-transform duration-300 hover:scale-105 hover:translate-y-2"
    >
      <div className="relative min-w-[230px] min-h-[300px] w-[260px] h-[320px] mx-auto my-5 bg-white border border-x rounded-md m-auto flex flex-col justify-between">
        {/* LOGO */}
        <div className="z-10 flex items-center justify-center absolute top-2 left-2 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300">
          {(() => {
            if (product.brand == "She") {
              return (
                <img src="/brands/1.svg" alt="She Logo" className="w-16" />
              );
            } else if (product.brand == "Eugeneperma") {
              return (
                <img
                  src="/brands/3.svg"
                  alt="Eugeneperma Logo"
                  className="w-20"
                />
              );
            } else if (product.brand == "Chenice") {
              return (
                <img src="/brands/2.svg" alt="Chenice Logo" className="w-16" />
              );
            } else {
              return <span>Unknown Brand</span>; // Opcional: para manejar casos no previstos
            }
          })()}
        </div>

        {/* FAV */}
        {product.newFlag && (
          <div className="absolute top-1/2 bg-red-400 sm:-translate-x-1/4 w-14 h-7 text-white text-xs font-bold flex justify-center items-center z-50">
            Nuevo!
          </div>
        )}
        <FontAwesomeIcon
          icon={faHeart}
          className={`absolute top-2 right-1 z-50 h-6 cursor-pointer text-gray-400 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300 ${
            product.favorite ? "text-red-400" : "text-gray-400"
          }`}
        />

        {/* IMAGE */}
        <div className="">
          <img
            src={product.image_url}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="max-h-52 mx-auto pt-2"
          />
        </div>

        {/* PRODUCT INFO */}
        <div className="flex items-center justify-between rounded-md p-3 group-hover:bg-gray-200 transition-colors duration-300 flex-grow">
          <div className="flex-grow">
            <h3 className="text-sm md:text-md font-semibold text-gray-700 line-clamp-2 overflow-hidden">
              {product.name}{" "}
            </h3>
            <h5 className="text-sm">{product.format}</h5>
            <span className="font-italic text-gray-500 text-xs">
            {product.category} • {product.subcategory}
            </span>
          </div>

          <div className="w-1/4 flex-none ml-2 text-center">
            <h4 className="font-bold text-gray-700 text-md">
              €{product.price}
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
