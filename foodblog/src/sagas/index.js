import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

function* fetchFood() {
  const json = yield axios.get('http://localhost:8900/food')
        .then(response => response.data, );    
  yield put({ type: "FOOD_RECEIVED", json: json, });
}
function* actionWatcher() {
     yield takeLatest('GET_FOOD', fetchFood)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}