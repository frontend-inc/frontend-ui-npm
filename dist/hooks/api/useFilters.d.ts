import React from "react";
type UseFiltersProps = {
  query?: any;
  handleSubmit?: any;
};
declare const useFilters: (props: UseFiltersProps) => {
  filter: undefined;
  findFilter: (fieldName: any, filters: any) => any;
  showFilterModal: boolean;
  setShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenFilterModal: () => void;
  handleCloseFilterModal: () => void;
  handleAddFilter: (filter: any) => void;
  activeFilters: any[];
  setActiveFilters: React.Dispatch<React.SetStateAction<any[]>>;
};
export default useFilters;
