import { all, put, takeEvery } from "redux-saga/effects";

//APIs
import { UsersAPI } from "../transport/crudPeople.api";

// actions 
import * as actions from '../actions';

// errors handlers actions
import * as errorHandlers from '../../errorReducer/action';

// general loader
import { setLoader } from "../../loaderReducer/action";

// small loaders
import { setNewLoader, removeLoader } from '../../smallLoaders/actions';

// interfaces
import  { IPerson } from '../models';

// constants 
import * as ERROR_CONSTANTS from '../../../config/constants';

export function*  getPeopleSagas({
        payload,
}: ReturnType<typeof actions.getPeople.request>) {

  try {
    yield put(setLoader({loader: true}))

    const res: IPerson[] = yield (UsersAPI.getPeopleList());
    
    if (typeof res === 'object') {
        yield put(actions.getPeople.success(res))
        yield put(setLoader({loader: false}))
    } else {
      yield put(actions.getPeople.failure(res));
      yield put(setLoader({loader: false}))
    }
  } catch (error) {
    yield put(errorHandlers.setNewError({
      type: ERROR_CONSTANTS.GET_ERROR,
      id: Math.random(),
    }))
  }
}


export function*  addNewPersonSaga({
  payload,
}: ReturnType<typeof actions.addPeople.request>) {

  try {

    yield put(setNewLoader({ id: payload.id }))

    const res: IPerson = yield (UsersAPI.addNewUser({...payload}));

    if (typeof res === 'object') {
      yield put(removeLoader({ id: payload.id }))
      yield put(actions.addPeople.success(res))

    } else {
      yield put(removeLoader({ id: payload.id }))
      yield put(actions.addPeople.failure(res));
    }

  } catch (error) {
    yield put(removeLoader({ id: payload.id }))
      yield put(errorHandlers.setNewError({
        type: ERROR_CONSTANTS.POST_ERROR,
        id: Math.random(),
      }))
  }
}

export function*  updateUserSaga({
  payload,
}: ReturnType<typeof actions.updatePeopleById.request>) {

  try {
    yield put(setNewLoader({ id: payload.id }))

    const res: IPerson = yield (UsersAPI.updateUserStatus({...payload}));

    if (typeof res === 'object') {
      yield put(removeLoader({ id: payload.id }));
      yield put(actions.updatePeopleById.success(res));

    } else {
      yield put(removeLoader({ id: payload.id }))
      yield put(actions.updatePeopleById.failure(res));

    }

  } catch (error) {
    yield put(removeLoader({ id: payload.id }))
      yield put(errorHandlers.setNewError({
        type: ERROR_CONSTANTS.PUT_ERROR,
        id: Math.random(),
      }))
  }
}


export function* crudUsersSaga() {
  yield all([
    takeEvery(actions.getPeople.request, getPeopleSagas),
    takeEvery(actions.addPeople.request, addNewPersonSaga),
    takeEvery(actions.updatePeopleById.request, updateUserSaga),
  ]);
}
