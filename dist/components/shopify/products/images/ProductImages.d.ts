import React from "react";
import { Product, Image } from "webstudio-shopify";
type ProductImagesProps = {
  product: Product;
  image: Image;
  images: Image[];
  handleClick: (img: Image) => void;
};
declare const ProductImages: React.FC<ProductImagesProps>;
export default ProductImages;
