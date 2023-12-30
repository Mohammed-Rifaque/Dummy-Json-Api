import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
  favorites: [],
  categories: [],
  ProductByID: {},
  queries: {
    page: 1,
    limit: 12,
  },
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductReducer: (state, { payload }) => {
      state.products = payload;
    },

    setQueries: (state, { payload }) => {
      state.queries = payload;
    },

    setTotal: (state , { payload }) => {
      state.total = payload;
    },

    setProductById: (state, { payload }) => {
      state.ProductByID = payload;
    },
    addToFavorites: (state, action) => {
      const { payload } = action;
      state.favorites.push({ ...payload, isFavorite: true });
    },
    removeFromFavorites: (state, action) => {
      const { payload } = action;
      state.favorites = state.favorites.filter(
        (product) => product.id !== payload.id
      );
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const {
  getProductReducer,
  addToFavorites,
  removeFromFavorites,
  setQueries,
  setCategories,
  setTotal,
  setProductById
} = productSlice.actions;

export const productsSelector = (state) => state.products;
export const selectFavorites = (state) => state.products.favorites;

const productReducer = productSlice.reducer;
export default productReducer;
