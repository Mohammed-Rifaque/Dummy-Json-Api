import React, { useState } from "react";
import ProductCard from "./ProductCard.js";
import "./style.css"; 
import { selectFavorites } from "../redux/slicers/productSlice.js";
import { useSelector } from "react-redux";

const FavProductList = () => {
const favorites = useSelector(selectFavorites);
const [imageLoading, setImageLoading] = useState(false);

  return (
    <div className="fav-product-list-container">
      <h2>WishList Products</h2>
      {favorites.length === 0 ? (
        <p>No WishList Products yet.</p>
      ) : (
        <div className="product-list-container">
          {favorites.map((favoriteproduct, i) => (
            <ProductCard
              key={i}
              product={favoriteproduct}
              isFavorite={true}
              className="product-card" 
              setImageLoading={setImageLoading}
              imageLoading={imageLoading}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavProductList;
