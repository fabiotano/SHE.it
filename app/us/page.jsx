import React from "react";

const About = () => {
  return (
    <div className="container ">
      <div class="text-2xs py-2 pl-3">
        <p>
          <a href="/">Inicio</a> / <span class="text-gray-300">About Us</span>
        </p>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-center my-2">Skin Hair Expo</h2>
      <div className="md:my-6 md:grid md:grid-cols-2 items-center">
        <div>
        <p className="text-justify md:text-center leading-7 md:leading-9 px-10 py-5 md:p-12 font-italic text-md">
          SHE è un marchio di cosmetici specializzato nella produzione e vendita
          di prodotti professionali per parrucchieri ed estetisti. Con una vasta
          gamma di prodotti di alta qualità, SHE si distingue per offrire
          soluzioni innovative ed efficaci per la cura dei capelli, della pelle
          e delle unghie. I suoi prodotti sono progettati per soddisfare le
          esigenze e le richieste dei professionisti del settore, garantendo
          risultati eccezionali e duraturi. SHE si impegna a fornire prodotti
          all'avanguardia, formulati con ingredienti di prima qualità e
          sviluppati con le ultime tecnologie cosmetiche. Con una solida
          reputazione nel settore, SHE è diventata un marchio di fiducia per
          parrucchieri ed estetisti che cercano l'eccellenza in ogni prodotto
          che utilizzano.
        </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11708.111169420341!2d13.92824824286415!3d42.808898738795655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1331f2cad0da6a43%3A0xfea06498cf5a7d72!2s64018%20Tortoreto%2C%20Teramo%2C%20Italia!5e0!3m2!1ses-419!2sve!4v1713550582459!5m2!1ses-419!2sve"
          width="100%"
          height="400"
          style={{ border: 0 , width: "full"}} // Estilos CSS pasados como un objeto JavaScript
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
