import Rating from '@mui/material/Rating';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Skeleton } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  addToFavorites,
  removeFromFavorites,
  selectFavorites,
} from "../redux/slicers/productSlice";
import { local } from "../helpers/projectHelpers";
import { useState } from 'react';
import { DETAIL } from '../config/constant/routePathConstants';

const ProductCard = ({ product, setImageLoading, imageLoading }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((fav) => fav?.id === product?.id);

  const handleToggleFavorite = (e) => {
    e.stopPropagation();

    if (isFavorite) {
      const newFavorites = favorites.filter((fav) => fav?.id !== product?.id);
      dispatch(removeFromFavorites(product));
      local.set("favorites", newFavorites);
    } else {
      dispatch(addToFavorites(product));
      local.set("favorites", [...favorites, product]);
    }
  };

  const handleProductDetail = (productId) => {
    localStorage.setItem("detail", JSON.stringify(product));
    navigate(`${DETAIL.replace(":productId", productId)}`)
  };

  const handleImageLoad = () => {
    console.log("Image loaded successfully");
    setImageLoading(false);
  };

  const handleImageError = () => {
    console.error("Error loading image");
    setImageLoading(false);
  };

  return (
    <div className="product-card" onClick={() => handleProductDetail(product.id)}>
      {imageLoading ? (
        <Skeleton variant="rectangular" height={200} />
      ) : (
        <img
          src={product?.thumbnail}
          alt={product?.title}
          style={{ height: "260px", width: "100%" }}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
      <div className="card-content">
        <div className="product-title">
          <h4>{product?.title}</h4>
        </div>
        <div className="product-description">
          <p>{product?.description}</p>
        </div>
        <div className="product-price">
          <h2>${product?.price}</h2>
        </div>
        <div className="like-button-container">
          <button
            className="favorite-button"
            onClick={handleToggleFavorite}
          >
            <FavoriteIcon style={{ color: isFavorite ? "red" : "white" }} />
          </button>
        </div>
        <div className="product-rating">
          <Rating name="product-rating" value={product?.rating} readOnly />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
