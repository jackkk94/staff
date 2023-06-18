import { New } from '../../new/models/new.model';
import { NewActionTypes, NewActions } from './new.actions';
import { NewDatasources } from '../components/new/new.component';

export interface NewState {
  initialValue: New;
  dataSources: NewDatasources;
}

const initialState = {
  initialValue: null,
  dataSources: null,
} as NewState;

export function NewReducer(state = initialState, action: NewActions): NewState {
  switch (action.type) {
    case NewActionTypes.CREATE_NEW_COMPLETE:
    case NewActionTypes.UPDATE_NEW_COMPLETE:
    case NewActionTypes.LOAD_NEW_COMPLETE:
      return {
        ...state,
        initialValue: action.payload,
      };
    case NewActionTypes.LOAD_DATASOURCES_COMPLETE:
      return {
        ...state,
        dataSources: action.payload,
      };
    default:
      return state;
  }
}
