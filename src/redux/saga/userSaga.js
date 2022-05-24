import { call, put, takeEvery, } from "redux-saga/effects";
import { getUserAPI } from "../../api/user";
import * as types from "../types";

function* fetchUsers (action) {
    try {
        const users = yield call(getUserAPI)
        yield put({ type: types.GET_USERS_SUCCESS , users: users})
    } catch (e) {
        yield put({ type: types.GET_USERS_FAILED , message: e.message})
    }
}

function* userSaga () {
    yield takeEvery( types.GET_USERS_REQUESTED , fetchUsers);
}

export default userSaga;
