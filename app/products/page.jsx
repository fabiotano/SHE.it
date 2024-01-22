import ProductFilter from '@/components/ProductFilter';
import ProductCard from '@/components/ProductCard';
import { eugenpermaProducts } from '@/eugenpermaProduct';

import Link from 'next/link';
import { products, sortOptions } from '@/constants.js';
import PaginationControl from '@/components/PaginationControl';

function Products({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const perPage = parseInt(searchParams.perPage) || 5;

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  const productsPaginated = products.slice(startIndex, endIndex);

  return (
    <div className="container">
      <div className="text-2xs py-2 pl-3">
        <p>
          <Link href={'/'}>Inicio</Link> /{' '}
          <span className="text-gray-300">Peluqueria</span>
        </p>
      </div>
      <div className="sm:flex">
        <ProductFilter />
        <section className="mt-6 flex-grow">
          <div>
            <h2 className="text-5xl font-bold text-center">Peluquería</h2>
            <p className="text-center text-gray-400 text-xs mt-4 hidden sm:block">
              ¿Buscas las mejores ofertas online en productos Peluquería ? No
              busques más que nuestra tienda online ofrecemos una amplia
              variedad de productos de Peluquería a los precios más competitivos
              en línea. Además, ofrecemos regularmente promociones y descuentos
              especiales en nuestros productos, por lo que seguro que
              encontrarás la mejor oferta posible. Así que si buscas cualquier
              tipo de producto de Peluquería , ¡asegúrate de consultar primero
              nuestra tienda online!
            </p>
          </div>
          {/* Sort Results */}
          <div className="flex justify-center sm:justify-end my-6">
            <p className="text-sm py-3 hidden sm:block">Ordenar por:</p>
            <select className="border-b border-gray-400  px-2 text-sm mx-10 py-3 outline-none w-full sm:w-auto">
              {sortOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.title}
                </option>
              ))}
            </select>
          </div>
          {/* Products */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 py-4">
            {productsPaginated.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          <PaginationControl
            hasNextPage={endIndex < products.length}
            hasPreviousPage={startIndex > 0}
            hasPagination={products.length > perPage}
            pageQuantity={Math.ceil(products.length / perPage)}
          />
        </section>
      </div>
    </div>
  );
}

export default Products;
