'use client';
import { createClient } from '@/app/lib/supabase/client';
import { deleteProduct } from '@/app/services/products';
import { useProducts } from '@/app/context/ProductContext';
import { faFlag, faHeart, faMedal } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

function ProductLine(props) {
  const supabase = createClient();

  const { state, dispatch } = useProducts();
  const { products } = state;

  const handleDeleteProduct = async (id) => {
    await deleteProduct(supabase, id);
    const filteredProducts = products.filter((product) => product._id !== id);
    dispatch({ type: 'SET_PRODUCTS', payload: filteredProducts });
  };

  const handleEdit = (id) => {
    const { name, format, category, subcategory, price, brand, newflag, bestseller, favorite, region } = products.find(
      (product) => product._id === id
    );
    dispatch({ type: 'SET_PRODUCT_SELECTED', payload: id });
    dispatch({ type: 'SET_PRODUCT_FORM', payload: { name, format, category, subcategory, price, brand, newflag, bestseller, favorite, region } });
    dispatch({ type: 'SET_EDIT', payload: true });

    // Desplazar hacia la parte superior de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { product } = props;

  return (
<div className="relative bg-white rounded-lg shadow-lg pt-8 pb-1 px-5 max-w-xs w-full flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
<div>
  <div className="relative w-full h-56 my-4 overflow-hidden rounded-lg border border-gray-200">
    <img
      src={product.image_url}
      alt={product.name}
      className="absolute inset-0 w-full h-full object-contain"
    />
  </div>

    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl text-left font-semibold mr-4 text-gray-800">{product.name}</h3>
      <div className="flex gap-2">
        <button
          onClick={() => handleEdit(product._id)}
          className="text-blue-600 hover:text-blue-700 focus:outline-none"
          aria-label="Edit"
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button
          onClick={() => handleDeleteProduct(product._id)}
          className="text-red-600 hover:text-red-700 focus:outline-none"
          aria-label="Delete"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  </div>

<div className="absolute top-1 left-3 text-sm rounded-md shadow-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
  {(() => {
    if (product.brand == 'She') {
      return (
        <img
          src="/logoShe.png"
          alt="She Logo"
          className="w-20"
        />
      );
    } else if (product.brand == 'Eugeneperma') {
      return (
        <img
          src="/logoEugeneperma.png"
          alt="Eugeneperma Logo"
          className="w-24"
        />
      );
    } else if (product.brand == 'Chenice') {
      return (
        <img
          src="/logoChenice.png"
          alt="Chenice Logo"
          className="w-20"
        />
      );
    } else {
      return <span>Unknown Brand</span>; // Opcional: para manejar casos no previstos
    }
  })()}
</div>

<div className="absolute top-14 left-8 w-10 h-10 flex items-center justify-center text-xl text-white bg-blue-400 p-2 rounded-full">
  {product.id}
</div>

  <div className="absolute top-4 right-1 text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded-md shadow-sm">
  {product.newflag === true ? (
    <FontAwesomeIcon icon={faFlag} className="text-red-500" />
  ) : (
    <FontAwesomeIcon icon={faFlag} className="text-gray-400" />
  )}
  </div>

  <div className="absolute top-12 right-1 text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded-md shadow-sm">
  {product.bestseller === true ? (
    <FontAwesomeIcon icon={faMedal} className="text-red-500" />
  ) : (
    <FontAwesomeIcon icon={faMedal} className="text-gray-400" />
  )}
</div>

  <div className="absolute top-20 right-1 text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded-md shadow-sm">
  {product.favorite === true ? (
    <FontAwesomeIcon icon={faHeart} className="text-red-500" />
  ) : (
    <FontAwesomeIcon icon={faHeart} className="text-gray-400" />
  )}
  </div>

  <div>
    <p className="text-md font-semibold text-gray-800 mb-2">
      €{product.price} 
    </p>
    <p className="text-sm text-gray-600 mb-2">
      {product.format} • {product.category} • {product.subcategory}
    </p>
    <p className="text-sm text-gray-600">
      {product.region}
    </p>
  </div>
</div>

  );
}

export default ProductLine;
