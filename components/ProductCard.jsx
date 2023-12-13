import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';

function ProductCard(props) {
  const { product } = props;
  return (
    <div className="relative w-[170px] h-[250px] sm:w-[210px] sm:h-[300px]  bg-white border rounded-md m-auto">
      {product.newFlag && (
        <div className="absolute top-1/2 bg-red-400 sm:-translate-x-1/4 w-14 h-7 text-white text-xs font-bold flex justify-center items-center z-50">
          Nuevo!
        </div>
      )}
      <FontAwesomeIcon
        icon={faHeart}
        className={`absolute top-1 right-1 z-50 h-6 cursor-pointer ${
          product.favorite ? 'text-red-400' : 'text-gray-400'
        }`}
      />
      <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] m-auto mt-6">
        <Image
          src={product.image}
          alt=""
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h3 className="text-center font-semibold text-md mt-3">
        {product.title}
      </h3>
      <h6 className="text-center text-xs text-gray-400">{product.desc}</h6>
      <h4 className="text-center font-bold mt-3">
        &euro;
        {` ${Math.floor(product.price)}`}
        <sup>{(product.price % 1).toFixed(2).substring(2)}</sup>
      </h4>
    </div>
  );
}

export default ProductCard;
