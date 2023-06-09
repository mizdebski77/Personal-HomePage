import { call, put, takeLatest} from "redux-saga/effects";
import { getRepos } from "./getApi";
import { fetchRepos, fetchReposError, fetchReposSuccess } from "./githubSlice";

function* fetchRepositoriesHandler() {
    try {
        const repos = yield call(getRepos);
        yield put(fetchReposSuccess(repos));

    } catch (error) {
        yield put(fetchReposError(error));
    }
}

export function* githubSaga() {
    yield takeLatest(fetchRepos.type, fetchRepositoriesHandler);
}