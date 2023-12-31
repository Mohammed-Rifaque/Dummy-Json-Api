
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsApi, fetchCategoriesApi } from "../api";
import {
  setQueries,
  productsSelector,
} from "../redux/slicers/productSlice";
import { ReactComponent as CustomArrow } from "../assets/images/dropdown-arrow.svg";

import ProductCard from "./ProductCard";
import SkeletonCard from "../components/Skeleton";
import Pagination from "@mui/material/Pagination";
import "./style.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products = [], categories = [], total, queries } = useSelector(
    productsSelector
  );

  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);

  const handlePageChange = (event, page) => {

    dispatch(setQueries({
      ...queries,
      limit: 12,
      page: queries.page + 1 || 2
    }));
  };

  useEffect(() => {
    dispatch(fetchCategoriesApi(setLoading)); 
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProductsApi(setLoading,setImageLoading, queries));
  }, [dispatch, queries.page, queries.category , queries]);

  const handleChange = (value) => {
    dispatch(setQueries({
      ...queries,
      category: value,
      page: 1,
      limit: 12,
      query:""
    }));
  };

  return (
    <div className="container">
      <div className="filter-container">
        <div className="filter-option">
          <div className="custom-select-wrapper">
            <select
              value={queries.category}
              onChange={(e) => handleChange(e.target.value)}
              className="custom-select"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="custom-arrow"><CustomArrow/></div>
          </div>
        </div>
      </div>

      <div className="product-list-container">
      {loading ? (
        [...Array(10)].map((_, index) => <SkeletonCard key={index} />)
      ) : (
        products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              imageLoading={imageLoading}
              setImageLoading={setImageLoading}
            />
          ))
        ) : (
          <p>No products found!</p>
        )
      )}
    </div>
    

      <div className="pagination-container">
        <Pagination
          count={Math.ceil(total / queries.limit)} 
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ProductList;
