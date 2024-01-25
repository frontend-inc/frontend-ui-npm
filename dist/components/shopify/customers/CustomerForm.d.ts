import React from 'react';
import { Customer } from 'frontend-shopify';
type CustomerFormProps = {
    loading: boolean;
    customer: Customer;
    handleChange: any;
    handleSubmit: any;
};
declare const CustomerForm: React.FC<CustomerFormProps>;
export default CustomerForm;
