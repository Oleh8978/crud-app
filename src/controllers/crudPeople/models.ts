export interface IPeopleState {
    response: IPerson[],
}

export interface IPerson {
    name: string,
    avatar: string,
    id: number,
    surname: string,
    status: string,
}