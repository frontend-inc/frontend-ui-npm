import React from 'react';
import { FieldElementProps } from './Field';
type FieldTextProps = FieldElementProps & {
    maxChars?: number;
    expandable?: boolean;
};
declare const FieldText: React.FC<FieldTextProps>;
export default FieldText;
