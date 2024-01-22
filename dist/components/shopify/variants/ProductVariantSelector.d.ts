import React from "react";
import { Product } from "webstudio-shopify";
type ProductVariantSelectorProps = {
  product: Product;
  selectedOptions: any;
  handleOptionChange: any;
};
declare const ProductVariantSelector: React.FC<ProductVariantSelectorProps>;
export default ProductVariantSelector;
