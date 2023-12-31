import { lazy } from "react";
import { DETAIL, FAVORITE, HOME } from "../config/constant/routePathConstants";
import NotFound from "../components/NotFound";

const HomeLayout = lazy(() => import("../container"))
const ProductList = lazy(() => import("../pages/ProductList"));
const Favorites = lazy(() => import("../pages/WishList"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));


// Routes
const MainRoutes = [
    {
        path: HOME,
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <ProductList />,
            },            {
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


