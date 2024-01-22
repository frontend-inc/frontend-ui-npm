import React from "react";
type CellBelongsToProps = {
    value: string;
    displayValue: string;
    headerName: string;
    handleClick: () => void;
};
declare const CellBelongsTo: React.FC<CellBelongsToProps>;
export default CellBelongsTo;
