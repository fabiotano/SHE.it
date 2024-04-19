import Image from "next/image";
import Link from "next/link";

import "./Footer.css";

function Footer() {
  return (
    <footer className="border">
      <div className="max-width">
        <div className="md:flex-row  sm:flex-col sm:flex bg-red-500 sm:py-4">
          <div className="text-gray-50 flex align-top px-4 pt-4">
            <Image
              className="align-top"
              src={"/favoritos.svg"}
              width={32}
              height={32}
            />
            <div className="ps-2">
              <h3 className="font-bold text-lg m-2">Lista dei favoriti</h3>
              <p className="text-sm">
                Guarda nel tuo profilo gli articoli che preferisci, in modo da
                poterli tenere d'occhio fino a quando arriverà il momento di
                acquistarli.
              </p>
            </div>
          </div>
          <div className="text-gray-50 flex align-top px-4 py-4">
            <Image src={"/entrega_rapida.svg"} width={32} height={32} />
            <div className="ps-2">
              <h3 className="font-bold text-lg m-2">Consegna veloce</h3>
              <p className="text-sm">
                Tutte le spedizioni vengono effettuate nel minor tempo
                possibile, garantito. Durante l'elaborazione dell'ordine, ti
                forniremo una data di consegna garantita o stimata.
              </p>
            </div>
          </div>
          <div className="text-gray-50 flex align-top px-4 py-4">
            <Image src={"/24_7.svg"} width={32} height={32} />
            <div className="ps-2">
              <h3 className="font-bold text-lg m-2">Ordini disponibili 24/7</h3>
              <p className="text-sm">
                Gestiamo i tuoi ordini in qualsiasi momento del giorno e della
                settimana, cercando sempre di offrirti il miglior servizio
                possibile.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-6 max-width px-8 container items-end">
        <div className="flex flex-col">
          <Image src={"/logoShe.png"} height={80} width={120} />
        </div>
        <div className="flex flex-col xs:hidden ps-6">
          <p className="text-gray-500 text-sm w-64">Skin Hair Expo SRL</p>
          <Link href="" className="text-gray-500 text-sm mt-2">
            Tortoreto 64018 (TE)
          </Link>
        </div>
        <div className="flex flex-col xs:hidden ps-1">
          <Link href={""} className="text-gray-500 text-sm font-bold mb-1">
            Prodotti
          </Link>
          <Link href={""} className="text-gray-500 text-xs pb-1">
            Peluqueria
          </Link>
          <Link href={""} className="text-gray-500 text-xs">
            Marche
          </Link>
        </div>
        <div className="flex flex-col xs:hidden ps-6">
          <Link href={""} className="text-gray-500 text-sm font-bold mb-1">
            Informazioni
          </Link>
          <Link
            href={"https://wa.me/393294131136"}
            className="text-gray-500 text-xs pb-1"
          >
            Contatti
          </Link>
          <Link href={"/us"} className="text-gray-500 text-xs">
            About us
          </Link>
        </div>
      </div>
      <div className="h-6 bg-gray-200 flex justify-center align-middle">
        <p className="text-center text-gray-500 text-xs m-auto">
          &copy;2023 - SHE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
