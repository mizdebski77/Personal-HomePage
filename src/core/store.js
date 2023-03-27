import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import githubReducer from "../common/sections/Portfolio/githubSlice"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    github: githubReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
