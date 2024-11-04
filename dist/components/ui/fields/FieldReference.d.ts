import React from 'react';
import { FieldElementProps } from './Field';
type FieldReferenceProps = FieldElementProps & {
    handleClick?: () => void;
};
declare const FieldReference: React.FC<FieldReferenceProps>;
export default FieldReference;
