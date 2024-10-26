import React from 'react';
import { ShopifyCustomerType } from 'frontend-shopify';
type ShopifyCustomerFormProps = {
    loading: boolean;
    customer: ShopifyCustomerType;
    handleChange: any;
    handleSubmit: any;
};
declare const ShopifyCustomerForm: React.FC<ShopifyCustomerFormProps>;
export default ShopifyCustomerForm;
