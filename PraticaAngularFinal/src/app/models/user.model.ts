import { Adress } from './adress.model';

export interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    adress: Adress;
}