import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import Link from 'next/link';

const ProductCategory = (props) => {

    return (
        <div className="relative border rounded-md bg-white h-[333px] bg-cover bg-no-repeat bg-top mt-5 m-auto md:mt-2">
        <img
          className="w-full object-cover h-full"
          src="/Carrousell-image1.jpg"
          alt="Descripción de la imagen"
        />
        <div className="absolute inset-x-0 bottom-0 w-5/6 m-auto bg-white p-3">
          <h2 className="font-bold text-xl mb-2 text-black">SUBCATEGORY</h2>
          <p className="text-lg text-gray-400 mb-2">Descubre los packs</p>
          <p className="font-bold text-sm text-red-500 mb-2">
            Ver Todos --
          </p>
        </div>
      </div>
    );
}

export default ProductCategory;
