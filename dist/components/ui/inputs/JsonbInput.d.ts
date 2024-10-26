import React from 'react';
import { InputPropsType } from '../../../types';
type JsonbInputProps = InputPropsType & {
    title?: string;
    fields: Record<string, any>[];
    name: string;
    label?: string;
    info?: string;
    value: any[];
    handleChange: any;
};
declare const JsonbInput: React.FC<JsonbInputProps>;
export default JsonbInput;
