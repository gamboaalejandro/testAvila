import { PayloadToken } from "./token.interface";
export class responsed {
    code: number;
    message: string;
    data?: unknown;
}
export interface ResponseLogin {
     token: string;
    user: PayloadToken 
}
