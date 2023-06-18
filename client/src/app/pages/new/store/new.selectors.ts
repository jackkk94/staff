import { createSelector } from '@ngrx/store';

import { NewState } from './new.reducer';
import { NewDatasources } from '../components/new/new.component';

interface state {
  newState: NewState;
}

const state = (state: state) => state.newState;

const initialValue = createSelector(
  state,
  (state: NewState) => state.initialValue
);
const dataSources = createSelector(
  state,
  (state: NewState) => state.dataSources
);
const categoryDataSources = createSelector(
  dataSources,
  (state: NewDatasources) => state?.categories
);

export const NewSelectors = {
  initialValue,
  dataSources,
  categoryDataSources,
};
