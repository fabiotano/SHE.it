import './globals.css';
import Header from '../components/Header';
import Home from '../components/Home';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <Home />
                {/* {children} */}
                {/* <footer>este es el footer</footer> */}
                {children}
                <Footer />
            </body>
        </html>
    );
}
