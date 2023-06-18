import { User } from "./user.model";

export interface LoginRequest {
    password: string;
    login: string;
}

export interface LoginResponse {
    token: string;
    id: string;
    user: User;
}