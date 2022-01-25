import { ILoaderState } from "./loaderReducer/models";
import { IErrorsState } from "./errorReducer/models";
import { ILoadersState } from './smallLoaders/models';
import { IPeopleState } from "./crudPeople/models";

export interface IStore {
    loader: ILoaderState,
    errors: IErrorsState,
    smallLoader: ILoadersState,
    people: IPeopleState
}