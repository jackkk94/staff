import { Guid } from 'guid-typescript';
import { City } from 'src/app/common/models/city.model';
import { Position } from 'src/app/common/models/position.model';
import {
  BaseSearchFilter,
  DateRange,
  SortSettings,
} from 'src/app/common/models/search.model';
import { User } from 'src/app/common/models/user.model';

export interface UserSearchFilter extends BaseSearchFilter {
  fullName?: string;
  city?: Guid[];
  position?: Guid[];
  startDateRange?: DateRange;
  birthday?: Date;
}

export type UserFiltersData = {
  cities: City[];
  positions: Position[];
};
