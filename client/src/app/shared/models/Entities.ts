
import { Guid } from "guid-typescript";

export interface Entity {
  id: Guid;
  name: string;
  parent: Entity;
}

export interface EntityState {
  entities: Entity[];
}