import { Guid } from "guid-typescript";
import { Office } from "./office.model";
import { Project } from "./project.model";
import { City } from "./city.model";
import { Position } from "./position.model";


export interface User {
    id: Guid;
    role: UserRole;
    name: string;
    surname: string;
    fullName: string;
    phone: string;
    position: Position;
    email: string;
    city: City;
    office: Office;
    place: string;
    info?:string;
    startDate: Date;
    birthday?: Date;
    age: number;
    isActive: boolean;
    project: Project;
    photoUrl?: string;
}

export const enum UserRole {
    Admin = 1,
    Manager = 2,
    Employee = 3
}