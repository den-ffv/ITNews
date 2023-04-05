import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./slices/auth";
import { posetsReducer } from './slices/posts';

const store = configureStore({
  reducer: {
    posts: posetsReducer,
    auth: authReducer,
  },
});

export default store;
