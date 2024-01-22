import React from "react";
import { Product } from "webstudio-shopify";
type ColorVariantsOptionsProps = {
    product: Product;
    name: string;
    values: any;
    selected: string;
    handleChange: any;
    styles?: any;
};
declare const ColorVariantsOptions: React.FC<ColorVariantsOptionsProps>;
export default ColorVariantsOptions;
