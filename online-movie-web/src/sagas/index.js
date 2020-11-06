import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import '@babel/polyfill';


function* fetchLatestMovies() {
  const json = yield axios.get('http://3.134.99.170:4000/latest')
        .then(response => response.data, );    
  yield put({ type: "LATEST_RECEIVED", json: json, });
}
function* fetchNearByEvents() {
  const json = yield axios.get('http://3.134.99.170:4000/events')
        .then(response => response.data, );    
  yield put({ type: "EVENTS_RECEIVED", json: json, });
}
function* fetchUpcomings() {
  const json = yield axios.get('http://3.134.99.170:4000/upcomingMovies')
        .then(response => response.data, );    
  yield put({ type: "UPCOMINGS_RECEIVED", json: json, });
}
function* actionWatcher() {
     yield takeLatest('GET_LATEST', fetchLatestMovies)
     yield takeLatest('GET_EVENTS', fetchNearByEvents)
     yield takeLatest('GET_UPCOMINGS', fetchUpcomings)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}