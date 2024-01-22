import React from "react";
type CellHeaderProps = {
    field: any;
    sortBy: string;
    sortDirection: string;
    handleSort: (header: any) => void;
};
declare const CellHeader: React.FC<CellHeaderProps>;
export default CellHeader;
