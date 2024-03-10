import React from 'react';
import { InputPropsType, SyntheticEventType } from '../../../types';
type RatingInputProps = InputPropsType & {
    name?: string;
    readOnly?: boolean;
    disableBorder?: boolean;
    size?: 'small' | 'medium' | 'large';
    label?: string;
    value?: number;
    handleChange?: (e: SyntheticEventType) => void;
};
declare const RatingInput: React.FC<RatingInputProps>;
export default RatingInput;
