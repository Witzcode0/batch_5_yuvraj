// todoSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_TODOS_REQUEST,
} from "./todoActionTypes";

import {
  fetchTodosSuccess,
  fetchTodosFailure
} from "./todoActions";

// API call
const fetchTodosApi = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/"
  );
  return response.json();
};

// Worker Saga
function* fetchTodos() {
  try {
    const todos = yield call(fetchTodosApi);
    yield put(fetchTodosSuccess(todos));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

// Watcher Saga
export function* todoSaga() {
  yield takeLatest(FETCH_TODOS_REQUEST, fetchTodos);
}
