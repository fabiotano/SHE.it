import './globals.css';
import Header from '../components/Header';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <footer>este es el footer</footer>
            </body>
        </html>
    );
}
