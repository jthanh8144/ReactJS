import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <h1>App</h1>
            <nav className='nav'>
                <Link to=''>Home</Link>
                <br/>
                <Link to='products'>Products</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default App;
