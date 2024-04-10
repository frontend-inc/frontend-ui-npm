import React from 'react';
import { ProductCollectionCarouselProps } from '../../components/shopify/products/ProductCollectionCarousel';
import { SectionProps, HeadingProps } from '../../types';
type ShopifyProductsCarouselProps = SectionProps & HeadingProps & ProductCollectionCarouselProps;
declare const ShopifyProductsCarousel: React.FC<ShopifyProductsCarouselProps>;
export default ShopifyProductsCarousel;
