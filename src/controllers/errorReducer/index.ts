import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./action";

// Interfaces
import { IErrorsState } from "./models";

export type FeeTypeSelector = ActionType<typeof actions>;

/* Reducer */
const initialState: IErrorsState = {
    errors: []
};

export const errorsReducer = createReducer<IErrorsState, FeeTypeSelector>(
    initialState
)
  .handleAction(actions.setNewError, (state, { payload }) => ({
    errors: [...state.errors, payload]
}))
.handleAction(actions.removeError, (state, { payload }) => ({
    errors: [...state.errors.filter(item => item.id !== payload.id)]
}))