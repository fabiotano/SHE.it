'use client';

import { createClient } from '@/app/lib/supabase/client';
import { createProduct, updateProduct } from '@/app/services/products';
import { useProducts } from '@/app/context/ProductContext';

function FormUpload() {
  const supabase = createClient();

  const { state, dispatch } = useProducts();
  const { edit, productForm, productSelected, products } = state;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const file_name = e.target.files[0].name;
    dispatch({ type: 'SET_PRODUCT_FORM', payload: { file, file_name } });
  };

  const handleInput = (e) => {
    switch (e.target.name) {
      case 'file':
        handleFileChange(e);
        break;
      default:
        dispatch({
          type: 'SET_PRODUCT_FORM',
          payload: {
            ...productForm,
            [e.target.name]: e.target.value,
          },
        });
        break;
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (edit) {
      const updatedProduct = await updateProduct({
        dbClient: supabase,
        id: productSelected,
        data: productForm,
      });

      const updatedProducts = products.map((product) =>
        product._id === productSelected ? updatedProduct : product
      );

      dispatch({ type: 'SET_PRODUCTS', payload: updatedProducts });
      dispatch({ type: 'SET_EDIT', payload: false });
      dispatch({ type: 'RESET_FORM' });

      return;
    }
    if (!productForm.file) {
      alert('Please upload an image');
      return;
    }

    const productData = await createProduct({
      dbClient: supabase,
      data: productForm,
    });
    dispatch({ type: 'SET_PRODUCTS', payload: [...products, productData] });
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <div className="max-w-2xl text-center bg-white mx-auto">
      <form onSubmit={submitForm} className="border rounded shadow px-10 py-6">
        {edit ? (
          <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
        ) : (
          <h2 className="text-2xl font-bold mb-4">Create Product</h2>
        )}
        <div className="flex flex-col mt-4">
          <label className="mb-3 font-bold text-gray-700">Upload File</label>
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={handleFileChange}
            className="p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {productForm.imageUrl && (
            <img
              src={productForm.imageUrl}
              alt="Preview"
              className="mt-2 w-32 h-auto rounded"
            />
          )}
        </div>
        <div className="flex flex-col mt-4">
          <label className="mb-3 font-bold text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={productForm.name}
            onChange={handleInput}
            required
            className="p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col my-4">
          <label className="mb-3 font-bold text-gray-700">Description</label>
          <input
            type="text"
            name="description"
            value={productForm.description}
            onChange={handleInput}
            required
            className="p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className=" py-2 px-4 w-1/3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {edit ? 'Edit' : 'Create'}
          </button>
        </div>
      </form>
    </div>
  );
}
export default FormUpload;
