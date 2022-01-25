import { createReducer, ActionType } from "typesafe-actions";
import { all } from "redux-saga/effects";

// sagas
import { crudUsersSaga } from './sagas/crudPeople';

// Actions
import * as actions from "./actions";

// Interfaces
import { IPeopleState } from "./models";

export type crudActionType = ActionType<typeof actions>;

export const crudSagas = function* () {
    yield all([
      crudUsersSaga()
    ]);
  };

/* Reducer */
const initialState: IPeopleState = {
    response: [],
};

export const crudReducer = createReducer<IPeopleState, crudActionType>(
  initialState
)
  .handleAction(
    actions.getPeople.success,
    (state: IPeopleState, { payload }): IPeopleState => ({
      ...state,
      response: payload
    })
  )
  .handleAction(
    actions.addPeople.success,
    (state: IPeopleState, { payload }): IPeopleState => ({
      ...state,
      response: [...state.response, {...payload}]
    })
  )
  .handleAction(
    actions.updatePeopleById.success,
    (state: IPeopleState, { payload }): IPeopleState => ({
      ...state,
      response: [...state.response.filter(item => item.id !== payload.id), {...payload}]
    })
  )
