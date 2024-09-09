import React from 'react';
import { ShopifyRecentlyViewedProps as RecentlyViewedProps } from '../../components/shopify/recently-viewed/ShopifyRecentlyViewed';
import { SectionProps, HeadingProps } from '../../types';
type ShopifyRecentlyViewedProps = SectionProps & HeadingProps & RecentlyViewedProps;
declare const ShopifyRecentlyViewed: React.FC<ShopifyRecentlyViewedProps>;
export default ShopifyRecentlyViewed;
