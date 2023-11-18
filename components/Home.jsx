import React from "react";

function Page() {
  return (
    <div>
      <div>
        <img src="/Carrousell-image1.jpg" alt="LogoSHE" />
      </div>
      <section className="bg-green-300 p-5"    >
        <h2 className="text-center text-xs">NUESTROS PRODUCTOS</h2>
        <ul className="flex flex-wrap justify-around items-center m-4">
          <li>
            <article>
              <img src="/product1-home.jpg" alt="LogoSHE" />
              <p>Nombre Producto 1</p>
              <p>Descripción</p>
            </article>
          </li>
          <li>
            <article>
            <img src="/product1-home.jpg" alt="LogoSHE" />
              <p>Nombre Producto 1</p>
              <p>Descripción</p>
            </article>
          </li>
          <li>
            <article>
            <img src="/product1-home.jpg" alt="LogoSHE" />
              <p>Nombre Producto 1</p>
              <p>Descripción</p>
            </article>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Page;
