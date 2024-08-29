"use client";

import FormUpload from "@/components/client/Form";
import ProductsTable from "@/components/client/ProductsTable";
import { ProductProvider } from "@/app/context/ProductContext";

function Products() {
  return (
    <ProductProvider>
      <div className="">
        <form
          className="text-right p-6 bg-white mx-auto"
          method="post"
          action={"/admin/signout"}
        >
          <button
            className="bg-red-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            Sign out
          </button>
        </form>
        <div className="flex flex-col md:flex-row w-lg">
          <div className="justify-center w-2/5  bg-gray-100 max-w-lg  rounded-lg shadow-md">
            <div className="rounded-lg shadow-md">
              <FormUpload />
            </div>
          </div>
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-center mt-8 mb-4 md:my-0 md:py-6">
              Product List
            </h2>
            <ProductsTable />
          </div>
        </div>
      </div>
    </ProductProvider>
  );
}
export default Products;
