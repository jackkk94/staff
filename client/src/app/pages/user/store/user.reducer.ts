import { DEFAULT_PAGE_SIZE } from 'src/app/shared/components/pagination/pagination.component';
import { NewCategory } from '../../new/models/new-category.model';
import { New } from '../../new/models/new.model';

import { UserActionTypes, UserActions } from './user.actions';
import { User } from 'src/app/common/models/user.model';
import { Project } from 'src/app/common/models/project.model';

export interface UserState {
  initialValue: User;
  team: Project;
}

const initialState = {
  initialValue: null,
  team: null
} as UserState;

export function UserReducer(
  state = initialState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.UPDATE_USER_COMPLETE:
    case UserActionTypes.LOAD_USER_COMPLETE:
      return {
        ...state,
        initialValue: action.payload,
      };

    case UserActionTypes.LOAD_PROJECT_TEAM_COMPLETE:
      return {
        ...state,
        team: action.payload,
      };
    default:
      return state;
  }
}
