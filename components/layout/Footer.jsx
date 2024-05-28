import Image from "next/image";
import Link from "next/link";

import "./Footer.css";

function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto pt-4 md:pt-8">
      <div className="max-width">
        <div className="md:flex-row sm:flex-col sm:flex bg-red-400 sm:py-4">
          <div className="text-gray-50 flex align-top px-4 pt-4">
            <Image
              className="align-top"
              src={"/favoritos.svg"}
              width={32}
              height={32}
              alt="Lista dei favoriti"
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
            <Image src={"/entrega_rapida.svg"} width={32} height={32} alt="Consegna veloce" />
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
            <Image src={"/24_7.svg"} width={32} height={32} alt="Ordini disponibili 24/7" />
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

      <div className="container max-w-6xl pt-5 md:py-10 mx-auto bg-white">

      <div class="flex flex-col items-center justify-center mt-4 space-y-6 h-full md:flex-row md:space-y-0 md:justify-between md:items-start">
    <div class="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
        <div class="h-14 flex items-center">
            <Image src="/logoShe.png" height={50} width={75} className="w-32 md:ml-3" alt="Logo SHE" />
        </div>
        <div class="flex flex-col items-center space-y-4 font-bold text-gray-600 md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
        <div className="group">
                <Link href="" className="h-10 text-gray-600">Prodotti</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-red-500"></div>
            </div>
            <div className="group">
                <Link href="" className="h-10 text-gray-600">Marche</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-red-500"></div>
            </div>
            <div className="group">
                <Link href="" className="h-10 text-gray-600">Contatti</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-red-500"></div>
            </div>
            <div className="group">
                <Link href="" className="h-10 text-gray-600">About us</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-red-500"></div>
            </div>
        </div>
    </div>

    <div class="flex flex-col items-start justify-between space-y-4 text-gray-500">
        <div class="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
            <div class="h-14 flex items-center">
                <Link href="#">
                    <img src="images/icon-facebook.svg" alt="Facebook" className="h-6 text-black" />
                </Link>
            </div>
            <div class="h-14 flex items-center">
                <Link href="#">
                    <img src="images/icon-twitter.svg" alt="Twitter" className="h-6" />
                </Link>
            </div>
            <div class="h-14 flex items-center">
                <Link href="#">
                    <img src="images/icon-instagram.svg" alt="Instagram" className="h-6" />
                </Link>
            </div>
        </div>
        <div class="font-bold justify-center text-gray-400">
            &copy; 2023 - SHE. All rights reserved.
        </div>
    </div>
</div>

        
      </div>
    </footer>
  );
}

export default Footer;
