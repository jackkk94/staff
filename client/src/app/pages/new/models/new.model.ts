import { Guid } from "guid-typescript";
import { NewCategory } from "./new-category.model";
import { User } from "src/app/common/models/user.model";

export interface New {
    id: Guid;
    title: string;
    published: boolean;
    summary: string;
    description: string;
    created: Date;
    category: NewCategory;
    author: User;
}

export interface NewRequest {
    title: string;
    summary: string;
    description: string;
    category: NewCategory;
    author?: User;
}