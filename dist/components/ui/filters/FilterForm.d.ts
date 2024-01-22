import React from "react";
type FilterFormProps = {
  query: any;
  fields: any[];
  handleChange: (e: any) => void;
  handleSearch: (e: any) => void;
  handleClearFilters: () => void;
};
declare const FilterForm: React.FC<FilterFormProps>;
export default FilterForm;
