import {  takeLatest, put } from "redux-saga/effects";
import { getWeather, fetchRequest, requestError} from "../actions/getWeather";

 function* fetchAsync() {
     try {
        yield put(getWeather);
        console.log(this);
    } catch (e) {
        yield put(requestError);
        console.log(this);
    }
}
export default function* watchFetch() {
    yield* takeLatest(fetchRequest, fetchAsync);
}