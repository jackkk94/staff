import { Action } from '@ngrx/store';
import { New, NewRequest } from '../../new/models/new.model';

export enum NewActionTypes {
  LOAD_NEW = '[NEW] LOAD_NEW',
  LOAD_NEW_COMPLETE = '[NEW] LOAD_NEW_COMPLETE',
  LOAD_NEW_ERROR = '[NEW] LOAD_NEW_ERROR',
  LOAD_DATASOURCES = '[NEW] LOAD_DATASOURCES',
  LOAD_DATASOURCES_COMPLETE = '[NEW] LOAD_DATASOURCES_COMPLETE',
  UPDATE_NEW = '[NEW] UPDATE_NEW',
  UPDATE_NEW_COMPLETE = '[NEW] UPDATE_NEW_COMPLETE',
  CREATE_NEW = '[NEW] CREATE_NEW',
  CREATE_NEW_COMPLETE = '[NEW] CREATE_NEW_COMPLETE',
  CANCEL_UPDATE = '[NEW] CANCEL_CREATE',
}

export class LoadNew implements Action {
  readonly type = NewActionTypes.LOAD_NEW;
  constructor(public payload: string) {}
}

export class LoadNewComplete implements Action {
  readonly type = NewActionTypes.LOAD_NEW_COMPLETE;
  constructor(public payload: New) {}
}

export class CancelUpdate implements Action {
  readonly type = NewActionTypes.CANCEL_UPDATE;
}

export class LoadNewError implements Action {
  readonly type = NewActionTypes.LOAD_NEW_ERROR;
}

export class LoadDataSources implements Action {
  readonly type = NewActionTypes.LOAD_DATASOURCES;
}

export class LoadDataSourcesComplete implements Action {
  readonly type = NewActionTypes.LOAD_DATASOURCES_COMPLETE;
  constructor(public payload: any) {}
}

export class UpdateNew implements Action {
  readonly type = NewActionTypes.UPDATE_NEW;
  constructor(public payload: {id: string, data: NewRequest}) {}
}

export class UpdateNewComplete implements Action {
  readonly type = NewActionTypes.UPDATE_NEW_COMPLETE;
  constructor(public payload: New) {}
}

export class CreateNew implements Action {
  readonly type = NewActionTypes.CREATE_NEW;
  constructor(public payload: NewRequest) {}
}

export class CreateNewComplete implements Action {
  readonly type = NewActionTypes.CREATE_NEW_COMPLETE
  constructor(public payload: New) {}
}

export type NewActions =
  | LoadNew
  | LoadNewComplete
  | LoadNewError
  | LoadDataSources
  | UpdateNew
  | UpdateNewComplete
  | CreateNew
  | CreateNewComplete
  | LoadDataSourcesComplete
  | CancelUpdate 
