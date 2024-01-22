import React from "react";
type CheckboxFilterListProps = {
    options: string[];
    values?: any;
    handleClick: (value: string | number) => void;
};
declare const CheckboxFilterList: React.FC<CheckboxFilterListProps>;
export default CheckboxFilterList;
