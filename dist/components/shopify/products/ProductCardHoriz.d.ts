import React from "react";
import { Product } from "webstudio-shopify";
type ProductCardProps = {
  product: Product;
  handleClick?: () => void;
  buttonText?: string;
  height?: number;
  width?: number;
  enableBorder?: boolean;
  enableAddToCart?: boolean;
  enableQuantity?: boolean;
  enableQuickShop?: boolean;
};
declare const ProductCardHoriz: React.FC<ProductCardProps>;
export default ProductCardHoriz;
