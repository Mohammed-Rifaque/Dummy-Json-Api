import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../../config/constant/routePathConstants";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector, selectFavorites, setQueries } from "../../../redux/slicers/productSlice.js";
import { fetchProductsApi } from "../../../api/index.js";
import { InputAdornment, IconButton, TextField, Drawer, List, ListItem, useMediaQuery } from "@mui/material";
import useDebouncedEffect from "../../../hooks/useDebouncedEffect.js";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector(selectFavorites);
  const [loading, setLoading] = useState(true);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const isMobile = useMediaQuery("(max-width:768px)");

  const { queries } = useSelector(productsSelector);

  useDebouncedEffect(
    () => {
      dispatch(fetchProductsApi(setLoading, setImageLoading, queries));
    },
    1000,
    [queries.query, dispatch]
  );

  useEffect(() => {
    const favoritesCount = favorites.length;
    setFavoriteCount(favoritesCount);
  }, [favorites]);

  const handleMenuItemClick = (path) => {
    navigate(path);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


  const handleSearch = (e) => {

    dispatch(setQueries({ ...queries, query: e.target.value , category: ""}))
  }

  return (
    <nav>
      <div className="dashboard-nav container">
        <div className="logo" onClick={() => navigate(HOME)}>
          <span>
            <span style={{ color: "#FF0BA3" }}>M</span>
            <span>oBoo</span>
            <span style={{ color: "#FF0BA3" }}>M</span>
          </span>
        </div>
        <div className="right-nav">
          {isMobile && (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleMobileMenu}
                className="menu-icon"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
              >
                <List>
                  <ListItem onClick={() => handleMenuItemClick("/")}>
                    Account
                  </ListItem>
                  <ListItem onClick={() => handleMenuItemClick("/")}>
                    Store
                  </ListItem>
                  <ListItem onClick={() => handleMenuItemClick("/favorites")}>
                    Wish List
                    {favoriteCount > 0 && (
                      <span className="favorite-count">{favoriteCount}</span>
                    )}
                  </ListItem>
                  <ListItem onClick={() => handleMenuItemClick("/")}>
                    Basket
                    <ShoppingBasketOutlinedIcon />
                  </ListItem>
                </List>
              </Drawer>
            </>
          )}

          <div className="search-container">
            <TextField
              type="text"
              placeholder="Search Products..."
              value={queries.query}
              onChange={handleSearch}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              className="text-field"
            />
          </div>
          <div className="admin-profile" id="admin-profile">
            <ul className="menus">
              <li onClick={() => handleMenuItemClick("/")}>Account</li>
              <li onClick={() => handleMenuItemClick("/")}>Store</li>
              <li className="favorite-icon-container" onClick={() => handleMenuItemClick("/favorites")}>
                <span >Wish List</span>
                {favoriteCount > 0 && (
                  <span className="favorite-count">{favoriteCount}</span>
                )}
              </li>
              <div className="basket-wrapper">
                <li onClick={() => handleMenuItemClick("/")}>Basket</li>
                <ShoppingBasketOutlinedIcon />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
