// Layouts
// import { HeaderOnly } from "~/components/Layout";

// Pages
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Product from "~/pages/Product";
import Register from "~/pages/Register";
import Search from "~/pages/Search";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/login", component: Login, layout: null },
    { path: "/register", component: Register, layout: null },
    { path: "/products/:productCode", component: Product },
    { path: "/products/search/:name", component: Search },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
