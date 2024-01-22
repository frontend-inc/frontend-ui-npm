import React from "react";
type CellHABTMProps = {
  value: string;
  field: any;
  row: any;
  handleClick: (value: any, field?: any, row?: any) => void;
};
declare const CellHABTM: React.FC<CellHABTMProps>;
export default CellHABTM;
