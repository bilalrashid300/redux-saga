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

function* setUser (action) {
    try {
        // const users = yield call(getUserAPI)
        // const users = yield call(action.payload);
        yield put({ type: types.SET_USERS_SUCCESS , users: action.payload})
    } catch (e) {
        yield put({ type: types.SET_USERS_FAILED , message: e.message})
    }
}

function* userSaga () {
    yield takeEvery( types.GET_USERS_REQUESTED , fetchUsers);
    yield takeEvery( types.SET_USERS_REQUESTED , setUser);
}

export default userSaga;
