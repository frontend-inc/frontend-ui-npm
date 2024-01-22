import React from "react";
import { TypographyVariants } from "../../../types";
type FieldPriceProps = {
    value?: any;
    label?: string;
    placeholder?: string;
    variant?: TypographyVariants;
    color?: string;
    rest?: any;
    currency?: string;
    digits?: number;
};
declare const FieldPrice: React.FC<FieldPriceProps>;
export default FieldPrice;
