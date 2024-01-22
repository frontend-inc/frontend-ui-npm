import React from "react";
type FavoritesProps = {
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
declare const Favorites: React.FC<FavoritesProps>;
export default Favorites;
