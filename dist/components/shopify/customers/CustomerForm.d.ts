import React from 'react';
import { CustomerType } from 'frontend-shopify';
type CustomerFormProps = {
    loading: boolean;
    customer: CustomerType;
    handleChange: any;
    handleSubmit: any;
};
declare const CustomerForm: React.FC<CustomerFormProps>;
export default CustomerForm;
