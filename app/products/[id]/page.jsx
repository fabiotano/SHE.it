// 'use client'
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { products } from '@/constants';
// import ProductCard from '@/components/ProductCard';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { products } from '@/products';
// async function getProductDetails(id) {
//   const product = await fetch(`http://localhost:3005/api/products/${id}`);
//   return product.json();
// }

async function ProductPage({ params }) {
  const id = parseInt(params.id);
  console.log(id)
  // const { product } = await getProductDetails(id);
  const product = products.find(product => product.id === id)

  if (!product) {
    return <h1>Product not found</h1>;
  } else {
    return (
      <div className="container">
        <div className="mt-4 ">
          <h1 className="text-lg font-bold pl-2">{product.title}</h1>
          <div className="relative w-full h-96  sm:w-[150px] sm:h-[150px] mt-6">
            <Image
              src={product.image}
              alt=""
              fill
              style={{ objectFit: 'contain' }}
            />
            <FontAwesomeIcon
              icon={faHeart}
              className={`absolute top-1 right-5 z-50 h-6 cursor-pointer ${
                product.favorite ? 'text-red-400' : 'text-gray-400'
              }`}
            />
          </div>
          {/* add quantity */}
        </div>
        <form action="" className="flex px-1">
          <label
            for="quantity"
            class="block  text-sm font-medium text-gray-900 dark:text-gray-400 mr-1"
          >
            <select
              id="quantity"
              class=" border border-gray-300 text-gray-900 text-sm rounded-sm block w-14 h-full  text-start "
            >
              <option selected disabled>
                qty
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
          <button
            type="submit"
            className="bg-black text-white w-full h-11 rounded-sm text-sm md:text-sm"
          >
            <FontAwesomeIcon icon={faCartShopping} className="mx-2" />
            Agregar al carrito
          </button>
        </form>

        <Link href="/products">Back to products</Link>
      </div>
    );
  }
}

export default ProductPage;
