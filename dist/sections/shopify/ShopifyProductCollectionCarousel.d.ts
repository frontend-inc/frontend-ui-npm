import React from 'react';
import { ShopifyProductCollectionCarouselProps as ProductCollectionCarouselProps } from '../../components/shopify/products/ShopifyProductCollectionCarousel';
import { SectionProps, HeadingProps } from '../../types';
type ShopifyProductsCarouselProps = SectionProps & HeadingProps & ProductCollectionCarouselProps;
declare const ShopifyProductCollectionCarousel: React.FC<ShopifyProductsCarouselProps>;
export default ShopifyProductCollectionCarousel;
