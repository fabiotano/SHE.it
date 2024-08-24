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
        <div className='flex flex-col md:flex-row md:space-x-4'>
        <FormUpload />
        <div className="bg-red-500 w-auto text-center mx-auto px-6 pt-2 lg:p-0">
          <h2 className="text-2xl font-bold mt-8 mb-4 md:mt-4">Products</h2>
          <ProductsTable />
        </div>
        </div>
      </div>
    </ProductProvider>
  );
}
export default Products;
