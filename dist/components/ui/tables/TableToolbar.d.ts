import React from "react";
type TableToolbarProps = {
  loading?: boolean;
  selected: any[];
  query: any;
  enableDelete?: boolean;
  enableEdit?: boolean;
  handleKeywordChange: (e: any) => void;
  handleKeywordSearch: (term: string) => void;
  handleFilter: (ev: any) => void;
  handleEdit?: (items: any[]) => void;
  handleDelete?: (items: any[]) => void;
  handleClearQuery: () => void;
  handlePublish?: (items: any[]) => void;
  handleUnpublish?: (items: any[]) => void;
  secondaryActions?: React.ReactNode;
};
declare const TableToolbar: React.FC<TableToolbarProps>;
export default TableToolbar;
