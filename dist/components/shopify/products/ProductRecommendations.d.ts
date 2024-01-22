import React from "react";
type ProductRecommendationsProps = {
  handle?: string | string[];
  editing?: boolean;
  layout?: "list" | "grid" | "carousel";
  title?: string;
  perPage?: string;
  productComponent?: React.FC<any>;
  enableBorder?: boolean;
  enableAddToCart?: boolean;
  enableQuantity?: boolean;
  enableQuickShop?: boolean;
  enableOkendoStarRating?: boolean;
  buttonText?: string;
};
declare const ProductRecommendations: React.FC<ProductRecommendationsProps>;
export default ProductRecommendations;
