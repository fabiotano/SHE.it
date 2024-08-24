"use client";

import regions from "@/regions";

import { createClient } from "@/app/lib/supabase/client";
import { createProduct, updateProduct } from "@/app/services/products";
import { useProducts } from "@/app/context/ProductContext";

function FormUpload() {
  const supabase = createClient();

  const { state, dispatch } = useProducts();
  const { edit, productForm, productSelected, products } = state;
  let productSelectedImage;

  if (productSelected) {
    productSelectedImage = products.find(
      (product) => product._id === productSelected
    ).image_url;
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const file_name = e.target.files[0].name;
    dispatch({ type: "SET_PRODUCT_FORM", payload: { file, file_name } });
  };

  const handleInput = (e) => {
    switch (e.target.name) {
      case "file":
        handleFileChange(e);
        break;
      case "region":
        const regionSelected = e.target.value;
        console.log(regionSelected);
        const regions = productForm.region;
        console.log(regions);
        if (!regions.find((reg) => reg === regionSelected)) {
          dispatch({
            type: "SET_PRODUCT_FORM",
            payload: {
              ...productForm,
              region: [...productForm.region, regionSelected],
            },
          });
        } else {
          const filteredRegions = regions.filter(
            (reg) => reg !== regionSelected
          );
          dispatch({
            type: "SET_PRODUCT_FORM",
            payload: {
              ...productForm,
              region: filteredRegions,
            },
          });
        }
        break;
      default:
        dispatch({
          type: "SET_PRODUCT_FORM",
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

      dispatch({ type: "SET_PRODUCTS", payload: updatedProducts });
      dispatch({ type: "SET_EDIT", payload: false });
      dispatch({ type: "RESET_FORM" });

      return;
    }
    if (!productForm.file) {
      alert("Please upload an image");
      return;
    }

    const productData = await createProduct({
      dbClient: supabase,
      data: productForm,
    });
    dispatch({ type: "SET_PRODUCTS", payload: [...products, productData] });
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <div className="text-center mx-auto">
      <form onSubmit={submitForm} className="border rounded shadow px-8 py-6">
        {edit ? (
          <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
        ) : (
          <h2 className="text-2xl font-bold mb-4">Create Product</h2>
        )}

        <div className="relative flex flex-col mt-4">
          <label className="mb-3 font-bold text-gray-700">Upload File</label>{" "}
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={handleFileChange}
            className="p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/2 mx-auto"
          />
          <span className="text-sm italic text-gray-500">
            {" "}
            (Nome sin caracteres especiales y/o espacios)
          </span>
          <div className="flex border-b justify-center items-center h-48">
            {productSelected && (
              <img
                src={productSelectedImage}
                alt="Image Product"
                className="h-44"
              />
            )}
          </div>
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
          <label className="mb-3 font-bold text-gray-700">Format</label>
          <input
            type="text"
            name="format"
            value={productForm.format}
            onChange={handleInput}
            required
            className="p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col my-4">
          <label className="mb-3 font-bold text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={productForm.category}
            onChange={handleInput}
            required
            className="p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col my-4">
          <label className="mb-3 font-bold text-gray-700">Subcategory</label>
          <input
            type="text"
            name="subcategory"
            value={productForm.subcategory}
            onChange={handleInput}
            required
            className="p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col my-4">
          <label className="mb-3 font-bold text-gray-700">Price</label>
          <input
            type="text"
            name="price"
            value={productForm.price}
            onChange={handleInput}
            required
            className="p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col my-4">
          <label className="mb-3 font-bold text-gray-700">Brand</label>
          <select
            name="brand"
            value={productForm.brand}
            onChange={(e) => handleInput(e)}
            required
            className="p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option hidden value="">
              --
            </option>
            <option value="She">She</option>
            <option value="Chenice">Chenice</option>
            <option value="Eugeneperma">Eugeneperma</option>
          </select>
        </div>

        <div className="flex flex-col my-4">
          <label className="mb-3 font-bold text-gray-700">New Product</label>
          <select
            name="newflag"
            value={productForm.newflag}
            onChange={(e) => handleInput(e)}
            required
            className="p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option hidden value="">
              --
            </option>
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </div>

        <div className="flex flex-col my-4">
          <label className="mb-3 font-bold text-gray-700">Best Seller</label>
          <select
            name="bestseller"
            value={productForm.bestseller}
            onChange={(e) => handleInput(e)}
            required
            className="p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option hidden value="">
              --
            </option>
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </div>

        <div className="flex flex-col my-4">
          <label className="mb-3 font-bold text-gray-700">Favorite</label>
          <select
            name="favorite"
            value={productForm.favorite}
            onChange={(e) => handleInput(e)}
            required
            className="p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option hidden value="">
              --
            </option>
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </div>
        <div className="flex flex-col my-4">
          <label className="mb-3 font-bold text-gray-700">
            Regions Available
          </label>
          <select
            name="region"
            multiple
            value={productForm.selectedRegions}
            onChange={(e) => handleInput(e)}
            className="p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className=" py-2 px-4 w-1/3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {edit ? "Edit" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}
export default FormUpload;
