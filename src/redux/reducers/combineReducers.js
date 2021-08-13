import { combineReducers } from "redux";
import counter from "./counterReducer";
import favorites from "./favouriteReducer";
import products from "./productsReducer";

export default combineReducers({
  counter,
  favorites,
  products
});
