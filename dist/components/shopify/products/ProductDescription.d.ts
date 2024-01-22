import React from "react";
import { Product } from "webstudio-shopify";
type ProductDescriptionProps = {
  product?: Product;
  color?: string;
};
declare const ProductDescription: React.FC<ProductDescriptionProps>;
export default ProductDescription;
