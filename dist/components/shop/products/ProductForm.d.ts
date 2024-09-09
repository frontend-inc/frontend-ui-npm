import React from 'react';
import { FormFieldType } from '../../../types';
export type ProductFormProps = {
    fields?: FormFieldType[];
    parentResource?: any;
};
declare const ProductForm: React.FC<ProductFormProps>;
export default ProductForm;
