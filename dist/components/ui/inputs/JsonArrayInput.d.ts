import React from 'react';
import { InputPropsType } from '../../../types';
type JsonArrayInputProps = InputPropsType & {
    title?: string;
    fields: Record<string, any>[];
    name: string;
    label?: string;
    value: any[];
    handleChange: any;
};
declare const JsonArrayInput: React.FC<JsonArrayInputProps>;
export default JsonArrayInput;
