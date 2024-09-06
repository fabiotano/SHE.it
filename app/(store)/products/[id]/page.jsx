// 'use client'
import ProductDetail from "@/components/client/ProductDetail";

import { products } from "@/products";

async function ProductPage({ params }) {
  const id = parseInt(params.id);
  // const { product } = await getProductDetails(id);
  const product = products.find((product) => product.id === id);


  if (!product) {
    return <h1>Product not found</h1>;
  } else {
    return (
      <div className="flex mx-4 mb-4">
        <ProductDetail product={product}></ProductDetail>
      </div>
    );
  }
}

export default ProductPage;
