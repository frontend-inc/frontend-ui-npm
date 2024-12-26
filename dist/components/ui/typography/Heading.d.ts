import React from 'react';
import { SyntheticEventType } from '../../../types';
type HeadingProps = {
    label?: string;
    title?: string;
    subtitle?: string;
    textAlign?: 'left' | 'center' | 'right';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    secondaryAction?: React.ReactNode;
    editable?: boolean;
    handleChange?: (ev: SyntheticEventType) => void;
};
declare const Heading: React.FC<HeadingProps>;
export default Heading;
