'use client';
import { useEffect } from 'react';
import ProductLine from './ProductLine';
import { useProducts } from '@/app/context/ProductContext';

function ProductsTable() {
  const { state, fetchProducts } = useProducts();

  const { products, loading } = state;

  useEffect(() => {
    fetchProducts();
  }, []);

  // Ordena los productos por nombre
  const sortedProducts = [...products].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const productsGrid = sortedProducts.map((product, idx) => (
    <ProductLine product={product} key={idx} />
  ));

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {loading ? <p className="text-gray-600">Loading...</p> : productsGrid}
    </div>
  );
}

export default ProductsTable;