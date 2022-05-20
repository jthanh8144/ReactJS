// Layouts
// import { HeaderOnly } from "~/components/Layout";

// Pages
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Products from "~/pages/Products";
import Product from "~/pages/Product";
import Register from "~/pages/Register";
import Search from "~/pages/Search";
import Feedback from "~/pages/Feedback";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/login", component: Login, layout: null },
    { path: "/register", component: Register, layout: null },
    { path: "/products", component: Products },
    { path: "/products/:productCode", component: Product },
    { path: "/products/search/:name", component: Search },
    { path: "/feedback", component: Feedback },
];

const privateRoutes = [
    { path: "/user", component: Home },
];

export { publicRoutes, privateRoutes };
