import React from "react";
import { FilterOption } from "../../../../types";
type FilterButtonProps = {
  filters?: FilterOption[];
  loading?: boolean;
  fields?: any;
  handleFilter: (filter: FilterOption) => void;
  handleClear: () => void;
};
declare const FilterButton: React.FC<FilterButtonProps>;
export default FilterButton;
