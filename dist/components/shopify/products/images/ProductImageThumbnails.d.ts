import React from "react";
import { Image as ProductImage } from "webstudio-shopify";
type ProductImageSliderProps = {
  image: ProductImage;
  images: ProductImage[];
  handleClick: (img: ProductImage) => void;
  height?: number;
  width?: number;
  thumbnailSize?: number;
};
declare const ProductImageSlider: React.FC<ProductImageSliderProps>;
export default ProductImageSlider;
