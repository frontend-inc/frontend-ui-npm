import React from "react";
import { Product } from "webstudio-shopify";
type ProductListProps = {
    editing?: boolean;
    loading?: boolean;
    products: Product[];
    productComponent?: React.FC<any>;
    buttonText?: string;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuickShop?: boolean;
    enableQuantity?: boolean;
    enableOkendoStarRating?: boolean;
};
declare const ProductList: React.FC<ProductListProps>;
export default ProductList;
