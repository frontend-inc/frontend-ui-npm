import React from 'react';
import { CollectionProductsCarouselProps } from '../../components/shop/collection-products/CollectionProductsCarousel';
import { SectionProps, HeadingProps } from '../../types';
type ShopCollectionProductsCarouselProps = CollectionProductsCarouselProps & SectionProps & HeadingProps;
declare const ShopCollectionProductsCarousel: React.FC<ShopCollectionProductsCarouselProps>;
export default ShopCollectionProductsCarousel;
