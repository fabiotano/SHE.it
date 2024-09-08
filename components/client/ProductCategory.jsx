import Image from "next/image";

const ProductCategory = (props) => {
  return (
    <div className="relative border rounded-md w-full max-w-[530px] mx-auto h-48 md:h-[350px] md:w-[19%] bg-red-500 mt-4">
      <div className="relative w-full h-full">
        <Image
          className="object-cover"
          src="/Carrousell-image1.jpg"
          alt="Descripción de la imagen"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute top-0 left-0 w-full p-3">
        <h2 className="font-bold text-lg my-1 text-black">LINEAS</h2>
        <p className="font-bold text-sm text-red-500 my-1">Ver Todos --</p>
      </div>
    </div>
  );
};

export default ProductCategory;
