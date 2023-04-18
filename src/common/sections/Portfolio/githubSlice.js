import { createSlice } from "@reduxjs/toolkit";

export const githubSlice = createSlice({
  name: "github",
  initialState: {
    status: "loading",
    repos: [],
  },

  reducers: {
    fetchRepos: (state) => {
      state.status = "loading";
    },

    fetchReposSuccess: (state, action) => {
      state.status = "success";
      state.repos = action.payload;
    },

    fetchReposError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchRepos, fetchReposError, fetchReposSuccess } = githubSlice.actions;
export const selectGHState = state => state.github;

export const selectRepositories = state => selectGHState(state).repos;
export const fetchStatus = state => selectGHState(state).status;

export default githubSlice.reducer;