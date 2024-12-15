import React from 'react';
import { ShopifyAiAssistantProps } from '../../components/shopify/ai/ShopifyAiAssistant';
import { SectionProps, HeadingProps } from '../../types';
type ShopifyAssistantProps = SectionProps & HeadingProps & ShopifyAiAssistantProps;
declare const ShopifyAssistant: React.FC<ShopifyAssistantProps>;
export default ShopifyAssistant;
