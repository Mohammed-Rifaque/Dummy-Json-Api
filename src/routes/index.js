import { lazy } from "react";
import { DETAIL, FAVORITE, HOME } from "../config/constant/routePathConstants";
import NotFound from "../components/NotFound";

const HomeLayout = lazy(() => import("../container"))
const ProductList = lazy(() => import("../pages/ProductList"));
const Favorites = lazy(() => import("../pages/FavProductList"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));


// Routes
const HOME_ROUTES = [
    {
        index: true,
        element: <ProductList />,
    },
];
const MainRoutes = [
    {
        path: HOME,
        element: <HomeLayout />,

        children: [
            ...HOME_ROUTES,
            {
                path: FAVORITE,
                element: <Favorites />,
            },
            {
                path: DETAIL,
                element: <ProductDetail />,
            },
            {
                path: "*",
                element: <NotFound/>,
            },
        ],
    },
];
export default MainRoutes

