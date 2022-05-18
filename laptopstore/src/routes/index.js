// Layouts
// import { HeaderOnly } from "~/components/Layout";

// Pages
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Register from "~/pages/Register";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/login", component: Login, layout: null },
    { path: "/register", component: Register, layout: null },
    // { path: "/user", component: Following },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };