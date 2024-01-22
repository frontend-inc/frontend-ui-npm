import React from "react";
type FilterInputProps = {
  filters: any[];
  fieldOptions: any[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  handleRemove: (index: number) => void;
};
declare const FilterInputs: React.FC<FilterInputProps>;
export default FilterInputs;
