'use client';

import FormUpload from '@/components/client/Form';
import ProductsTable from '@/components/client/ProductsTable';
import { ProductProvider } from '@/app/context/ProductContext';

function Products() {
  return (
    <ProductProvider>
      <div className="">
        <form
          className="text-right p-6 bg-white mx-auto"
          method="post"
          action={'/admin/signout'}
        >
          <button
            className="bg-red-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            Sign out
          </button>
        </form>
        <FormUpload />
        <div className="max-w-6xl text-center bg-white mx-auto px-6 pt-2">
          <h2 className="text-2xl font-bold mt-8 mb-4">Products</h2>
          <ProductsTable />
        </div>
      </div>
    </ProductProvider>
  );
}
export default Products;
