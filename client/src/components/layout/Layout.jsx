import './Layout.css';

export const Layout = ({ children }) => {
    return (
        <>
            <header>
                <a href="/" className="home"><h1>Wedder</h1></a>
                <nav>
                    <ul>
                        <li><a href="/weddings">Weddings</a></li>
                        <li><a href="/guests">Guests</a></li>
                        <li><a href="/budgets">Budgets</a></li>
                        <li><a href="/vendors">Vendors</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer>
                &copy; Guillaume - {new Date().getFullYear()}
            </footer>
        </>
    )
}