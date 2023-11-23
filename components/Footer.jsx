import Image from 'next/image';
import Link from 'next/link';

import './Footer.css';

function Footer() {
    return (
        <footer className="border">
            <div className="max-width">
                <div className="md:flex-row  sm:flex-col sm:flex bg-red-500 sm:py-4">
                    <div className="text-gray-50 flex align-top px-4 pt-4">
                        <Image
                            className="align-top"
                            src={'/favoritos.svg'}
                            width={32}
                            height={32}
                        />
                        <div className="ps-2">
                            <h3 className="font-bold text-lg">
                                Lista de favoritos
                            </h3>
                            <p className="text-sm">
                                Guarda en tu perfil los artículos que más te
                                gustan para no perderlos de vista hasta que
                                llegue tu momento de comprar.
                            </p>
                        </div>
                    </div>
                    <div className="text-gray-50 flex align-top px-4 py-4">
                        <Image
                            src={'/entrega_rapida.svg'}
                            width={32}
                            height={32}
                        />
                        <div className="ps-2">
                            <h3 className="font-bold text-lg">
                                Entrega rápida
                            </h3>
                            <p className="text-sm">
                                Todos los envíos realizados en el menor tiempo
                                posible garantizado. Durante la tramitación del
                                pedido, te ofreceremos una fecha de entrega
                                garantizada o estimada.
                            </p>
                        </div>
                    </div>
                    <div className="text-gray-50 flex align-top px-4 py-4">
                        <Image src={'/24_7.svg'} width={32} height={32} />
                        <div className="ps-2">
                            <h3 className="font-bold text-lg">Pedidos 24/7</h3>
                            <p className="text-sm">
                                Gestionamos tus pedidos en cualquier momento del
                                día y de la semana, siempre buscando ofrecerte
                                el mejor servicio.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex p-6 max-width px-8 container ">
                <div className="flex flex-col">
                    <Image src={'/logo.jpeg'} height={50} width={200} />
                    <p className="text-gray-500 text-sm w-64 mt-2">
                        Parque Empresarial "Los LLanos" C/ Castilla y León
                        Parcela 232 (41909) Salteras
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        T. 955 708 855 (Sede Central)
                    </p>
                </div>
                <div className="flex flex-col xs:hidden ps-4">
                    <Link href={''} className="text-gray-500 font-bold mb-4">
                        Productos
                    </Link>
                    <Link href={''} className="text-gray-500 text-sm pb-1">
                        Peluqueria
                    </Link>
                    <Link href={''} className="text-gray-500 text-sm pb-1">
                        Estetica
                    </Link>
                    <Link href={''} className="text-gray-500 text-sm pb-1">
                        Barberia
                    </Link>
                    <Link href={''} className="text-gray-500 text-sm pb-1">
                        Marcas
                    </Link>
                </div>
                <div className="flex flex-col xs:hidden ps-4">
                    <Link href={''} className="text-gray-500 font-bold mb-4">
                        Informacion
                    </Link>
                    <Link href={''} className="text-gray-500 text-sm pb-1">
                        Contacto
                    </Link>
                    <Link href={''} className="text-gray-500 text-sm pb-1">
                        Sobre Nosotros
                    </Link>
                    <Link href={''} className="text-gray-500 text-sm pb-1">
                        FAQ
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
