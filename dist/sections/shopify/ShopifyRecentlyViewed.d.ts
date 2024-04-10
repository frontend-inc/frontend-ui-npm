import React from 'react';
import { RecentlyViewedProps } from '../../components/shopify/recently-viewed/RecentlyViewed';
import { SectionProps, HeadingProps } from '../../types';
type ShopifyRecentlyViewedProps = SectionProps & HeadingProps & RecentlyViewedProps;
declare const ShopifyRecentlyViewed: React.FC<ShopifyRecentlyViewedProps>;
export default ShopifyRecentlyViewed;
