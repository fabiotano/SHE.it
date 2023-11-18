import React from "react";

function Page() {
  const productos = [
    {
      id: 1,
      nombre: "Producto 1",
      descripcion: "Este es el producto 1",
    },
    {
      id: 2,

      nombre: "Producto 2",
      descripcion: "Este es el producto 2",
    },
    {
      id: 3,

      nombre: "Producto 3",
      descripcion: "Este es el producto 3",
    },
    {
      id: 4,

      nombre: "Producto 4",
      descripcion: "Este es el producto 4",
    },
  ];

  return (
    <div>
      <div>
        <img src="/Carrousell-image1.jpg" alt="LogoSHE" />
      </div>
      <section className="bg-green-300 p-5">
        <h2 className="text-center text-xs m-4">NUESTROS MARCAS</h2>
        <ul className="flex flex-wrap justify-around items-center">
          <li className="w-80 h-auto overflow-hidden">
            <img
              src="/Logo-Eugenperma.jpg"
              alt="Eugenperma"
              className="w-full h-full object-cover"
            />
          </li>
          <li className="w-80 h-auto overflow-hidden">
            <img
              src="/Logo-Chenice.jpg"
              alt="Chenice"
              className="w-full h-full object-cover"
            />
          </li>
        </ul>
        <h2 className="text-center text-xs m-4">PRODUCTOS DESTACADOS</h2>
        <ul className="flex flex-wrap justify-around items-center">
          {productos.map((producto) => (
            <li key={producto.id} className="w-1/2 mb-4">
              <article>
                <img src="/product1-home.jpg" alt="product1" />
                <p>{producto.nombre}</p>
                <p>{producto.descripcion}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Page;
