import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites, addToFavorites, removeFromFavorites, productsSelector } from '../redux/slicers/productSlice';
import './style.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { local } from '../helpers/projectHelpers';
import { fetchProductsByIdApi } from "../api";
import { useParams } from 'react-router-dom';
import { Skeleton, Typography, Grid, Card, CardMedia, Rating, } from '@mui/material';

const ProductDetail = () => {
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const { ProductByID } = useSelector(productsSelector);
  const favorites = useSelector(selectFavorites);
  const favoriteValues = local.get("favorites") || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsByIdApi(setLoading, productId));
  }, [dispatch, productId]);

  const isFavorite = ProductByID && favorites.some((fav) => fav.id === ProductByID.id);

  const handleToggleFavorite = () => {
    if (ProductByID) {
      if (isFavorite) {
        const newFavorites = favoriteValues.filter((fav) => fav?.id !== ProductByID?.id);
        dispatch(removeFromFavorites(ProductByID));
        local.set("favorites", newFavorites);
      } else {
        dispatch(addToFavorites(ProductByID));
        local.set("favorites", [...favoriteValues, ProductByID]);
      }
    }
  };

  return (
    <div className="product-detail-container" style={{ padding: '16px' }}>
      {loading ? (
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} sx={{ display: "flex" }}>
            <Grid item md={2} spacing={2} >
              <Skeleton variant="rectangular" width={80} height={60} sx={{ marginBottom: "5px" }} />
              <Skeleton variant="rectangular" width={80} height={60} sx={{ marginBottom: "5px" }} />
              <Skeleton variant="rectangular" width={80} height={60} sx={{ marginBottom: "5px" }} />
              <Skeleton variant="rectangular" width={80} height={60} sx={{ marginBottom: "5px" }} />
              <Skeleton variant="rectangular" width={80} height={60} sx={{ marginBottom: "5px" }} />
            </Grid>
            <Grid item md={6}>
              <Skeleton variant="rectangular" width={500} height={300} />
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Skeleton variant="text" width={200} />
            <Skeleton variant="text" width={300} />
            <Skeleton variant="text" width={250} />
            <Skeleton variant="text" width={200} />
            <Skeleton variant="text" width={150} />

          </Grid>
        </Grid>
      ) : ProductByID ? (
        <>
          <Typography variant="h4" style={{ fontSize: '1.5rem' }}>
            {ProductByID.title}
          </Typography>
          <div className="product-detail-wrapper">
            <div className="img-gallery-main-img-wrapper">
              <div className="image-gallery">
                {ProductByID?.images?.map((image, index) => (
                  <Card key={index} className="thumbnail-card">
                    <CardMedia
                      component="img"
                      alt={`Product Image ${index + 1}`}
                      height="100%"
                      image={image}
                    />
                  </Card>
                ))}
              </div>
              <div className="main-image">
                <div className="product-image">
                  <img src={ProductByID.thumbnail} alt={ProductByID?.title} style={{ width: '100%', height: 'auto' }} />
                </div>
              </div>
            </div>
            <div className="product-details">
              <div className="product-rating">
                <Rating name="product-rating" value={ProductByID?.rating} readOnly />
              </div>
              <Typography variant="body1" style={{ color: '#2196F3', fontWeight: 'bold', fontSize: '1rem' }}>
                Price: ${ProductByID?.price}
              </Typography>
              <div className="like-button-containerr">
                <button
                  className="favorite-button"
                  onClick={handleToggleFavorite}
                  style={{ fontSize: '1rem', padding: '8px' }}
                >
                  <FavoriteIcon style={{ color: isFavorite ? "red" : "white" }} />
                </button>
              </div>
              <Typography variant="body1">{ProductByID?.description}</Typography>
              <Typography variant="body1">Discount: {ProductByID?.discountPercentage}%</Typography>
              <Typography variant="body1">Rating: {ProductByID?.rating}</Typography>
              <Typography variant="body1">Stock: {ProductByID?.stock}</Typography>
              <Typography variant="body1">Brand: {ProductByID?.brand}</Typography>
              <Typography variant="body1">Category: {ProductByID?.category}</Typography>
            </div>
          </div>
        </>
      ) : (
        <Typography variant="body1">Product not found!</Typography>
      )}
    </div>
  );
};

export default ProductDetail;
