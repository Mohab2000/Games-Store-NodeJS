import { RequestMessages } from "./requestMessages";

export interface IError extends Error {
    status?: number;
}

export class RequestError extends Error {
    status?: number

    constructor(errorValues: RequestMessages) {
        super();
        const values = errorValues.toString().split("%");
        this.message = values[0]
        this.status = +values[1]
    }
}