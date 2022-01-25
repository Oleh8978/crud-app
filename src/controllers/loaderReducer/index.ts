import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./action";

// Interfaces
import { ILoaderState } from "./models";

export type LoaderTypeReducer = ActionType<typeof actions>;

/* Reducer */
const initialState: ILoaderState = {
    loader: false
};

export const loaderReducer = createReducer<ILoaderState, LoaderTypeReducer>(
    initialState
)
  .handleAction(actions.setLoader, (state, { payload }) => ({
    loader: payload.loader
}))