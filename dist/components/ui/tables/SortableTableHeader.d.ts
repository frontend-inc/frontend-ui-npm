import React from "react";
type SortableTableHeaderProps = {
  value: string;
  sortKey: string;
  sortable?: boolean;
  sortDirection: string;
  handleSort: (value: string) => void;
  children: React.ReactNode;
};
declare const SortableTableHeader: React.FC<SortableTableHeaderProps>;
export default SortableTableHeader;
