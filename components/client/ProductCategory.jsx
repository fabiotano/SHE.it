import Image from "next/image";

const ProductCategory = (props) => {
  return (
    <div className="relative border rounded-md w-full max-w-[530px] mx-auto h-48 md:h-[350px] md:w-[33%] hover:opacity-80 group">
      <div className="relative w-full h-full">
      <Image
          className="object-cover"
          src={props.category.image}
          alt={`Imagen de ${props.category.name}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute top-2 left-3 w-1/2 p-3 md:p-2 rounded-sm bg-white opacity-80 group-hover:opacity-none">
        <h2 className="font-bold text-lg md:my-1 text-gray-700 transform transition-transform group-hover:translate-x-3">
          {props.category.name}
        </h2>
        <p className="font-bold text-sm md:mt-1 text-red-500">Ver Todos</p>
      </div>
    </div>
  );
};

export default ProductCategory;
