export interface IPeopleState {
    response: IPerson[],
}

export interface IPerson {
    id: number,
    name: string,
    avatar: string,
    surname: string,
    status: string,
}