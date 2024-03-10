import React from 'react';
import { SyntheticEventType } from '../../../types';
type JSONInputProps = {
    errors: Record<string, string>;
    value: any;
    name: string;
    label?: string;
    placeholder?: string;
    handleChange: (e: SyntheticEventType) => void;
};
declare const JSONInput: React.FC<JSONInputProps>;
export default JSONInput;
