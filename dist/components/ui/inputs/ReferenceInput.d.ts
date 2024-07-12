import React from 'react';
import { SyntheticEventType } from '../../../types';
type ReferenceInputProps = {
    resource: any;
    label?: string;
    name?: string;
    value?: any;
    handleChange: (e: SyntheticEventType) => void;
    url: string;
    foreignUrl: any;
    contentType: string;
    fields: [];
};
declare const ReferenceInput: React.FC<ReferenceInputProps>;
export default ReferenceInput;
