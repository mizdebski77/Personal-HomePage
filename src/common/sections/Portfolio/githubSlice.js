import { createSlice } from "@reduxjs/toolkit";

const githubSlice = createSlice({
    name: "github",
    initialState: {
        status: "loading",
        repos: [],
    },

    reducers: {
        fetchRepos: (state) => {
            state.status = "loading";
        },

        fetchReposSuccess: (state, { payload: repos }) => {
            state.status = "success";
            state.repos = repos;
        },

        fetchReposError: (state) => {
            state.status = "error";
        },
    }
});

export const { fetchRepos, fetchReposError, fetchReposSuccess } = githubSlice.actions;
export const selectGHState = state => state.github;

export const selectRepositories = state => selectGHState(state).repos;
export const status = state => selectGHState(state).reposStatus;

export default githubSlice.reducer;