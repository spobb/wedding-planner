import './Layout.css';

import { Header } from './Header';
import { Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>

            <footer>
                &copy; Guillaume - {new Date().getFullYear()}
            </footer>
        </>
    )
}