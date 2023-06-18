import { Guid } from "guid-typescript";
import { User } from "./user.model";

export interface Project {
    id: Guid;
    name: string;
    members: User[];
}
