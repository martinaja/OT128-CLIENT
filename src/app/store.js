import { configureStore } from "@reduxjs/toolkit";
import category from "./slices/category";

export default configureStore({
  reducer: {
    category,
  },
});
