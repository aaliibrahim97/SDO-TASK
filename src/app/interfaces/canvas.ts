import { User } from "./user";

export interface Canvas {
    status:boolean;
    data:User;
    action:string;
}

export type ICanvas = Canvas | null