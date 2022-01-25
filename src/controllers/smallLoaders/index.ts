import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./actions";

// Interfaces
import { ILoadersState } from "./models";

export type LoaderTypeSelector = ActionType<typeof actions>;

/* Reducer */
const initialState: ILoadersState = {
    loaders: []
};

export const smallLoadersReducer = createReducer<ILoadersState, LoaderTypeSelector>(
    initialState
)
  .handleAction(actions.setNewLoader, (state, { payload }) => ({
    loaders: [...state.loaders, payload]
}))
.handleAction(actions.removeLoader, (state, { payload }) => ({
    loaders: [...state.loaders.filter(item => item.id !== payload.id)]
}))