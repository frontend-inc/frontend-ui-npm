import React from "react";
type FilterDrawerProps = {
  open: boolean;
  query: any;
  handleClose: () => void;
  fields: any[];
  handleSearch: (keywords: any) => void;
  handleChange: (e: any) => void;
  handleClearFilters: () => void;
};
declare const FilterDrawer: React.FC<FilterDrawerProps>;
export default FilterDrawer;
