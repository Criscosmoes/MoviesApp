import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  loading: false,
};

export const getPosts = createAsyncThunk("posts/getPosts", async (thunkAPI) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );

  const data = await res.json();

  return data;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.entities = payload;
    },
  },
});

export default postsSlice.reducer;
