import { takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import { searchImages } from '../actions/routines';
import { getImages } from '../api/apis';
/* WORKER SAGA */
function* searchImagesSaga(action) {
    try {
        const response = yield call(getImages, action.payload);
        yield put(searchImages.success(response));
    } catch (error) {
        yield put(searchImages.failure(error));
    }
}

/* WATCHER SAGA */
export default function* watchImages() {
    // run fetchDataFromServer on every trigger action
    yield takeLatest(searchImages.TRIGGER, searchImagesSaga);
}
