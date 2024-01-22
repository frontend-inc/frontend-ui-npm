import React from "react";
type RecentlyViewedProps = {
  editing?: boolean;
  layout?: "list" | "grid" | "carousel";
  title?: string;
  perPage?: string;
  productComponent?: React.FC<any>;
  enableBorder?: boolean;
  enableAddToCart?: boolean;
  enableQuantity?: boolean;
  enableQuickShop?: boolean;
  buttonText?: string;
  emptyIcon?: string;
  emptyTitle?: string;
  emptyDescription?: string;
};
declare const RecentlyViewed: React.FC<RecentlyViewedProps>;
export default RecentlyViewed;
