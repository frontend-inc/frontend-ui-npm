import React from "react";
type StyledListProps = {
  loading?: boolean;
  resources: any[];
  layout?: "list" | "grid" | "carousel";
  style?: "card" | "avatar" | "image" | "cover" | "chip";
  handleClick?: (item: any) => void;
  editing?: boolean;
  buttonText?: string;
  enableBorder?: boolean;
  enableGradient?: boolean;
  enableOverlay?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  emptyIcon?: string;
};
declare const StyledList: React.FC<StyledListProps>;
export default StyledList;
