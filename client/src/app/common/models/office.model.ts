import { Guid } from "guid-typescript";

export interface Office{
    id: Guid;
    name: string;
    city: string;
    isActive: boolean;
}