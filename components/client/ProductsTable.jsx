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
  // Ordena los productos por nombre, manejando valores nulos o indefinidos
  const sortedProducts = [...products].sort((a, b) => {
    const nameA = a.name || ''; // Usa una cadena vacía si `name` es nulo o indefinido
    const nameB = b.name || ''; // Usa una cadena vacía si `name` es nulo o indefinido
    return nameA.localeCompare(nameB);
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