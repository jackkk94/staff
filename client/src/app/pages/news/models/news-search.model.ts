import { Guid } from 'guid-typescript';
import { BaseSearchFilter } from 'src/app/common/models/search.model';
import { NewCategory } from '../../new/models/new-category.model';

export interface NewsSearchFilter extends BaseSearchFilter {
  fullName?: string;
  newCategories?: Guid[];
}

export type NewsFiltersData = {
  newCategories: NewCategory[];
};
