import React from "react";
type SortButtonProps = {
  fields: any[];
  sortBy: string;
  sortDirection: "asc" | "desc";
  handleSortBy: (sortBy: string) => void;
  handleSortDirection: (sortDirection: "asc" | "desc") => void;
};
declare const SortButton: React.FC<SortButtonProps>;
export default SortButton;
