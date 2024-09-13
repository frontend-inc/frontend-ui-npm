import React from 'react';
import { ProductReviewsProps } from '../../components/shop/product-reviews/ProductReviews';
import { SectionProps, HeadingProps } from '../../types';
type ShopProductReviewsProps = SectionProps & HeadingProps & ProductReviewsProps;
declare const ShopProductReviews: React.FC<ShopProductReviewsProps>;
export default ShopProductReviews;
