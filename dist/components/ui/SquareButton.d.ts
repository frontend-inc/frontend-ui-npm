import React from "react";
type SquareButtonProps = {
    icon: React.ReactNode;
    label: string;
    title?: string;
    selected?: boolean;
    handleClick?: () => void;
};
declare const SquareButton: React.FC<SquareButtonProps>;
export default SquareButton;
