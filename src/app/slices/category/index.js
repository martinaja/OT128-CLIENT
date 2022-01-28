import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    message: "",
    category: {
      name: "",
      description: "",
      image: "",
    },
    loader: false,
    error: false,
  },

  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setCategory: (state, action) => {
      state.category.name = action.payload.name;
      state.category.description = action.payload.description;
      state.category.image = action.payload.image;
    },
    setLoader: (state) => {
      switch (state.loader) {
        case false:
          state.loader = true;
          break;
        case true:
          state.loader = false;
          break;
        default:
          break;
      }
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setMessage, setCategory, setLoader, setError } =
  categorySlice.actions;

export default categorySlice.reducer;

export const postCategoy = (newCategory) => (dispatch) => {
  dispatch(setError(false));
  dispatch(setLoader());
  axios
    .post(process.env.REACT_APP_API_CATEGORIES_POST, {
      name: newCategory.name,
      description: newCategory.description,
      image: newCategory.image,
    })
    .then((response) => {
      if (response.data.success === true) {
        dispatch(setMessage(response.data.message));
      } else {
        console.log(response.data.message);
        dispatch(setMessage(response.data.message));
      }
    })
    .catch((error) => {
      console.log(error);
      error.log(error);
    })
    .finally(() => {
      dispatch(setLoader());
    });
};

export const getCategory = (id) => (dispatch) => {
  dispatch(setError(false));
  dispatch(setLoader());
  const incomingCategory = {};
  axios
    .get(`${process.env.REACT_APP_API_CATEGORIES_GET}/${id}`)
    .then((response) => {
      if (response.data.success === true) {
        incomingCategory.name = response.data.data.name;
        incomingCategory.description = response.data.data.description;
        incomingCategory.image = response.data.data.image;
        dispatch(setCategory(incomingCategory));
      }
    })
    .catch((error) => {
      dispatch(setError(true));
      console.log(error);
    })
    .finally(() => {
      dispatch(setLoader());
    });
};

export const editCategory =
  (id, { name, description, image }) =>
  (dispatch) => {
    dispatch(setError(false));
    dispatch(setLoader());
    axios
      .put(`${process.env.REACT_APP_API_CATEGORIES_GET}/${id}`, {
        name: name,
        description: description,
        image: image,
      })
      .then((response) => {
        if (response.data.success) dispatch(setMessage(response.data.message));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(setLoader());
      });
  };
