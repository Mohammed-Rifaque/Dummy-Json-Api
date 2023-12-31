import React, { useEffect } from "react";
import "./assets/css/style.css";
import "./index.css";
import MainRoutes from "./routes";
import { useRoutes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LazyLoader from "./components/LazyLoader";
import { local } from "./helpers/projectHelpers";
import { addToFavorites } from "./redux/slicers/productSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const route = useRoutes(MainRoutes);
  const dispatch = useDispatch()
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
  });

  useEffect(() => {
    const favorites = local.get("favorites");
    favorites?.forEach((item) => {
      dispatch(addToFavorites(item));
    })
  }, [dispatch])

  return (
    <div>
      <ThemeProvider theme={theme}>
          <LazyLoader>
            <CssBaseline />
            {route}
          </LazyLoader>
      </ThemeProvider>
    </div>
  );
};

export default App;
