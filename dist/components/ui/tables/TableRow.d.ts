import React from "react";
type TableRowProps = {
  row: any;
  fields: Array<any>;
  enableEdit?: boolean;
  enableSelect?: boolean;
  handleClick?: (value: any, row: any, field: any) => void;
  handleEdit?: (item: any) => void;
  selectedIds?: Array<any>;
  handleSelect?: (item: any) => void;
};
declare const TableRow: React.FC<TableRowProps>;
export default TableRow;
