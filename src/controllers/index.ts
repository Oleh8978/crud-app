import { all } from "redux-saga/effects";
import { combineReducers, Reducer } from "redux";

// reducers 
import { loaderReducer } from "./loaderReducer";
import { errorsReducer } from "./errorReducer";
import { smallLoadersReducer } from './smallLoaders';
import { newUserReducer } from './newEmployerReducer';
import { crudReducer, crudSagas } from './crudPeople';

// interfaces 
import { IStore } from "./interfaces";

export const rootSaga = function* () {
  yield all([
    crudSagas()
  ]);
};

export const rootReducer = (): Reducer =>
  combineReducers<IStore>({
    loader: loaderReducer,
    errors: errorsReducer,
    smallLoader: smallLoadersReducer,
    people: crudReducer,
    newPerson: newUserReducer
  });
