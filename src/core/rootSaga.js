import { all } from "redux-saga/effects";
import { githubSaga } from "../common/sections/Portfolio/gitHubSaga";

export default function* rootSaga() {
  yield all([githubSaga()]);
};
