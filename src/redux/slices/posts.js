import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get("/posts");
  return data.slice(0).reverse();
});

export const fetchTags = createAsyncThunk("posts/fetchTags", async () => {
  const { data } = await axios.get("/tags");
  return data;
});

export const fetchRemovePost = createAsyncThunk(
  "posts/fetchRemovePost",
  async (id) => axios.delete(`/posts/${id}`)
);

export const getSavedPosts = createAsyncThunk(
  "auth/getSavedPosts",
  async () => {
    const { data } = await axios.get("/saved-post");
    return data;
  }
);

export const updateSavedPosts = (updatedPosts) => {
  return {
    type: 'UPDATE_SAVED_POSTS',
    payload: updatedPosts,
  };
};

const initialState = {
  posts: {
    items: [],
    status: "loading",
  },
  tags: {
    items: [],
    status: "loading",
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.posts.items = [];
        state.posts.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts.items = action.payload;
        state.posts.status = "loaded";
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.posts.items = [];
        state.posts.status = "error";
      })
      .addCase(fetchTags.pending, (state) => {
        state.tags.items = [];
        state.tags.status = "loading";
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.tags.items = action.payload;
        state.tags.status = "loaded";
      })
      .addCase(fetchTags.rejected, (state) => {
        state.tags.items = [];
        state.tags.status = "error";
      })
      // delete
      .addCase(fetchRemovePost.pending, (state, action) => {
        state.posts.items = state.posts.items.filter(
          (obj) => obj._id !== action.payload
        );
      })
      .addCase(getSavedPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSavedPosts.fulfilled, (state, action) => {
        state.status = "loaded";
        state.savedPosts = action.payload;
      })
      .addCase(getSavedPosts.rejected, (state) => {
        state.status = "error";
        state.savedPosts = [];
      })
      .addCase('UPDATE_SAVED_POSTS', (state, action) => {
        state.savedPosts = action.payload;
      });
  },
});
export const selectSavedPosts = (state) => state.auth.savedPosts;
export const posetsReducer = postsSlice.reducer;
