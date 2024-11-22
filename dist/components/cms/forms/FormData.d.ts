import React from 'react';
import { HeadingProps } from '../../../types';
export type FormDataProps = HeadingProps & {
    formId: number;
    buttonText?: string;
};
declare const FormData: React.FC<FormDataProps>;
export default FormData;
