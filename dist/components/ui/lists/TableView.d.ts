import React from "react";
type TableViewProps = any & {
  fields: Array<any>;
  url: string;
  handleClick?: (item: any) => void;
  handleEditClick?: (item: any) => void;
  actions?: any;
};
declare const TableView: React.FC<TableViewProps>;
export default TableView;
