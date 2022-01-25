export interface IError {
    type: string,
    id: number
}

export interface IErrorsState {
    errors: IError[]
}