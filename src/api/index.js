import axios from "axios";
import { getProductReducer, setCategories, setProductById, setTotal } from "../redux/slicers/productSlice";

const DUMMY_JSON_API = "https://dummyjson.com/products";

export const fetchProductsApi = (setLoading, setImageLoading, queries) => async (dispatch) => {
  const { category, page, limit, query } = queries || {};

  let URL = `${DUMMY_JSON_API}`;
  if (query) {
    URL = `${DUMMY_JSON_API}/search?q=${query}`;
  } else if (category) {
    URL = `${DUMMY_JSON_API}/category/${category}`;
  }

  URL += URL.includes("?") ? `&skip=${limit * (page - 1)}&limit=${limit || 12}` : `?skip=${limit * (page - 1)}&limit=${limit || 12}`

  try {
    const response = await axios.get(URL);
    const data = response.data;

    if (data.products) {
      dispatch(getProductReducer(data.products));
      dispatch(setTotal(data.total));
    }
    setImageLoading(false);
    setLoading(false);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    setLoading(false);
    setImageLoading(false);
  }
};

export const fetchCategoriesApi = (setLoading) => async (dispatch) => {
  const URL = `${DUMMY_JSON_API}/categories`;

  try {
    const response = await axios.get(URL);
    const categories = response.data;
    dispatch(setCategories(categories));
    setLoading(false);
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    setLoading(false);
  }
};

export const fetchProductsByIdApi = (setLoading, productID) => async (dispatch) => {
  const URL = `${DUMMY_JSON_API}/${productID}`
  try {
    const response = await axios.get(URL);
    const data = response.data;
    console.log(data)
    dispatch(setProductById(data));
    setLoading(false);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    setLoading(false);
  }
}
