import ProductFilter from "@/components/client/ProductFilter";
import ProductSort from "@/components/client/ProductSort";
import ProductCard from "@/components/client/ProductCard";

import Link from "next/link";
import { products, sortOptions } from "@/products.js";
import PaginationControl from "@/components/client/PaginationControl";

function Products({ searchParams }) {
  // console.log(searchParams)
  // sort options
  if (searchParams.sort) {
    products.sort((a, b) => {
      if (searchParams.sort === "lowToHigh") {
        return a.price - b.price;
      } else if (searchParams.sort === "highToLow") {
        return b.price - a.price;
      } else if (searchParams.sort === "aToZ") {
        return a.title.localeCompare(b.title);
      } else if (searchParams.sort === "zToA") {
        return b.title.localeCompare(a.title);
      }
    });
  }

  // filter options

  let filteredProducts = products;

  if (searchParams.category) {
    const arrValues = searchParams.category.split(",");
    filteredProducts = filteredProducts.filter((product) => {
      return arrValues.includes(product.category);
    });
  }

  if (searchParams.brand) {
    const arrValues = searchParams.brand.split(",");
    filteredProducts = filteredProducts.filter((product) => {
      return arrValues.includes(product.brand);
    });
  }

  if (searchParams.price) {
    let arrValues = searchParams.price.split(",");
    arrValues = arrValues.map((value) => {
      if (value === "Disponible") return true;
      return false;
    });
    filteredProducts = filteredProducts.filter((product) => {
      return arrValues.includes(product.price);
    });
  }

  // pagination

  const page = parseInt(searchParams.page) || 1;
  const perPage = parseInt(searchParams.perPage) || 8;

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  const productsPaginated = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="container">

      {/* Titulo */}

      <div className="text-2xs py-2 pl-3">
        <p>
          <Link href={"/"}>Inicio</Link> /{" "}
          <span className="text-gray-300">Parrucchieria</span>
        </p>
      </div>

      <div>
        <h2 className="text-3xl sm:text-5xl my-2 font-bold text-center">Parrucchieria</h2>
        <p className="text-center text-gray-400 text-xs mt-4 hidden sm:block">
          Esplora la nostra collezione di prodotti per capelli professionali, progettati per offrire risultati straordinari e un look impeccabile ad ogni utilizzo.
        </p>
      </div>

      {/* Sort Results */}
      <div className="flex justify-center sm:justify-end my-5">
        <p className="text-sm py-3 hidden sm:block">Ordenar por:</p>
        <ProductSort />
      </div>

      {/* Filter */}
      <div className="mt-4 mb-4 sm:flex">
        <ProductFilter />

        <section className="flex-grow">
          <Link href={"/products"}>
            {/* Products */}
            <div className="flex flex-wrap gap-2 py-2 m-2">
              {productsPaginated.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
            <PaginationControl
              hasNextPage={endIndex <= filteredProducts.length}
              hasPreviousPage={startIndex > 0}
              hasPagination={filteredProducts.length >= perPage}
              pageQuantity={Math.ceil(filteredProducts.length / perPage)}
            />
          </Link>
        </section>

      </div>
    </div>
  );
}

export default Products;
