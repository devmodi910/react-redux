// import { configureStore } from "@reduxjs/toolkit";
// import uiReducer from "./ui-slice";
// import cartReducer from "./cart-slice"

// const store = configureStore({
//   reducer: { ui: uiReducer,cart:cartReducer },
// });
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import cartReducer from "./cart-slice";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: { ui: uiReducer, cart: cartReducer },
  devTools: process.env.NODE_ENV !== 'production', // Enable DevTools only in development
});

export default store;