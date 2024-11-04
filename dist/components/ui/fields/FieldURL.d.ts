import React from 'react';
import { FieldElementProps } from './Field';
type FieldURLProps = FieldElementProps & {
    buttonText?: string;
};
declare const FieldURL: React.FC<FieldURLProps>;
export default FieldURL;
