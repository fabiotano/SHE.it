'use client';
import { createClient } from '@/app/lib/supabase/client';
import { deleteProduct } from '@/app/services/products';
import { useProducts } from '@/app/context/ProductContext';

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
    const { name, description } = products.find(
      (product) => product._id === id
    );

    dispatch({ type: 'SET_PRODUCT_SELECTED', payload: id });
    dispatch({ type: 'SET_PRODUCT_FORM', payload: { name, description } });
    dispatch({ type: 'SET_EDIT', payload: true });
  };

  const { product } = props;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-xs w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 transform transition duration-300 hover:scale-105">
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => handleEdit(product._id)}
            className="text-blue-500 hover:text-blue-600 focus:outline-none"
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            onClick={() => handleDeleteProduct(product._id)}
            className="text-red-500 hover:text-red-600 focus:outline-none"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-4 px-2 truncate">
        {product.description}
      </p>
    </div>
  );
}

export default ProductLine;
