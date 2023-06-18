export interface BaseSearchFilter {
  take?: number;
  skip?: number;
}

export interface SearchResponse<T> {
  result: T[];
  total: number;
}

export interface SortSettings<T> {
  field: keyof T;
  direction: SortDirection;
}

export enum SortDirection {
  Asc = -1,
  Dsc = -1,
}

export interface DateRange {
  start: Date;
  end: Date;
}
