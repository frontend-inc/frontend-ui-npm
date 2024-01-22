import React from "react";
type FilterButtonProps = {
  loading: boolean;
  query: any;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  badgeCount: number;
  handleClearFilters: () => void;
};
declare const FilterButton: React.FC<FilterButtonProps>;
export default FilterButton;
