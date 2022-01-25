import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./actions";

// Interfaces
import { ILoadersState } from "./models";

export type FeeTypeSelector = ActionType<typeof actions>;

/* Reducer */
const initialState: ILoadersState = {
    errors: []
};

export const smallLoadersReducer = createReducer<ILoadersState, FeeTypeSelector>(
    initialState
)
  .handleAction(actions.setNewLoader, (state, { payload }) => ({
    errors: [...state.errors, payload]
}))
.handleAction(actions.removeLoader, (state, { payload }) => ({
    errors: [...state.errors.filter(item => item.id !== payload.id)]
}))