import React from "react";
import { Option } from "../../../../types";
type FilterListItemProps = {
    label?: string;
    option: Option;
    values?: any;
    handleClick: () => void;
};
declare const FilterListItem: React.FC<FilterListItemProps>;
export default FilterListItem;
