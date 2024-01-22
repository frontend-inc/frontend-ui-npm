import React from "react";
import { FilterOption } from "../../../../types";
type FilterButtonProps = {
    field?: any;
    filters?: FilterOption[];
    handleFilter: (filter: FilterOption) => void;
};
declare const FilterField: React.FC<FilterButtonProps>;
export default FilterField;
