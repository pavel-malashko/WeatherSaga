import {FETCH_REQUEST, FETCH_REQUESTED_SUCCEEDED, FETCH_REQUESTED_FAILED} from '../constants'

export function fetchRequest() {
    return { type: FETCH_REQUEST }
}
export function getWeather(data) {
    return { type: FETCH_REQUESTED_SUCCEEDED,  data}
}
export function requestError(error) {
    return { type: FETCH_REQUESTED_FAILED, error}
}

