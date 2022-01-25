import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./actions";

// Interfaces
import { IPerson } from "../crudPeople/models";

export type NewEmployerTypeSelector = ActionType<typeof actions>;

/* Reducer */
const initialState: IPerson = {
    id: 0,
    name: '',
    avatar: '',
    surname: '',
    status: 'APPROVED',
};

export const newUserReducer = createReducer<IPerson, NewEmployerTypeSelector>(
    initialState
)
  .handleAction(actions.setFistName, (state, { payload }) => ({
    ...state,
    name: payload
}))
.handleAction(actions.setLastName, (state, { payload }) => ({
    ...state,
    surname: payload
}))
.handleAction(actions.setImageLink, (state, { payload }) => ({
    ...state,
    avatar: payload
}))
.handleAction(actions.setStatus, (state, { payload }) => ({
    ...state,
    status: payload === 'APPROVED' ? 'NOTAPPROVED' : 'APPROVED'
}))