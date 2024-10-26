import React from 'react';
import { SyntheticEventType, AnswerType } from '../../../../types';
type FormInputProps = {
    variant: any;
    name: string;
    label?: string;
    errors?: any;
    value?: any | any[];
    options: any;
    placeholder?: string;
    answers?: AnswerType[];
    handleChange: (e: SyntheticEventType) => void;
};
declare const FormInput: React.FC<FormInputProps>;
export default FormInput;
