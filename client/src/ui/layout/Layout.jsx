import './Layout.css';
import { Header } from './Header';

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>

            <footer>
                &copy; Guillaume - {new Date().getFullYear()}
            </footer>
        </>
    )
}