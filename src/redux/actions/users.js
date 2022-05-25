import * as type from '../types';

export function getUser (users) {
    return {
        type: type.GET_USERS_REQUESTED,
        payload: users,
    }
}

export function setUser (users) {
    return {
        type: type.SET_USERS_REQUESTED,
        payload: users,
    }
}