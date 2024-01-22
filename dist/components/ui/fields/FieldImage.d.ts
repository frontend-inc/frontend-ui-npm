import React from "react";
type FieldImageProps = {
    value?: any;
    label?: string;
    rest?: any;
    handleClick?: () => void;
    objectFit?: "cover" | "contain";
};
declare const FieldImage: React.FC<FieldImageProps>;
export default FieldImage;
