import React from "react";
type OptionButtonProps = {
    value: string;
    name: string;
    active: boolean;
    handleClick: any;
    children: any;
    width?: number;
    justifyContent?: string;
};
declare const OptionButton: React.FC<OptionButtonProps>;
export default OptionButton;
