import React from 'react';
import { InputProps, SyntheticEvent } from '../../../types';
type RatingInputProps = InputProps & {
    readOnly?: boolean;
    disableBorder?: boolean;
    size?: 'small' | 'medium' | 'large';
    label?: string;
    value?: number;
    handleChange?: (e: SyntheticEvent) => void;
};
declare const RatingInput: React.FC<RatingInputProps>;
export default RatingInput;
