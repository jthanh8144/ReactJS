import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';
import NewsPage from './pages/News';
import ContactPage from './pages/Contact';

function ReactRouter() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/news" element={<NewsPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
            </Routes>
        </>
    );
}

export default ReactRouter;
