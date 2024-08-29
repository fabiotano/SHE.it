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

// Ordena los productos por ID, manejando valores nulos o indefinidos
const sortedProducts = [...products].sort((a, b) => {
  const idA = a.id ?? Number.MAX_SAFE_INTEGER; // Usa un valor muy alto si `id` es nulo o indefinido
  const idB = b.id ?? Number.MAX_SAFE_INTEGER; // Usa un valor muy alto si `id` es nulo o indefinido
  return idA - idB;
});

  const productsGrid = sortedProducts.map((product, idx) => (
    <ProductLine product={product} key={idx} />
  ));

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {loading ? <p className="text-gray-600">Loading...</p> : productsGrid}
    </div>
  );
}

export default ProductsTable;