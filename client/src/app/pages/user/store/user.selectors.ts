import { createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';
import { User } from 'src/app/common/models/user.model';
import { Project } from 'src/app/common/models/project.model';

interface state {
  userState: UserState;
}

const state = (state: state) => state.userState;

const initialValue = createSelector(state, (state: UserState) => state.initialValue);
const projectTeam = createSelector(state, (state: UserState) => state.team);
const teamMembers = createSelector(projectTeam, (state: Project) => state?.members);

export const UserSelectors = {
  initialValue,
  projectTeam,
  teamMembers
};
