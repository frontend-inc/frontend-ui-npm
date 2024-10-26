import React from 'react';
import { FieldElementProps } from './Field';
type FieldRatingProps = FieldElementProps & {
    size?: 'sm' | 'md' | 'lg';
};
declare const FieldRating: React.FC<FieldRatingProps>;
export default FieldRating;
