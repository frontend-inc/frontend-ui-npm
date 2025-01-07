import React from 'react';
import { SyntheticEventType } from '../../../types';
type TypographyProps = {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline' | 'destructive';
    textAlign?: 'left' | 'center' | 'right';
    className?: string;
    editable?: boolean;
    name?: string;
    handleChange?: (ev: SyntheticEventType) => void;
    children: React.ReactNode;
};
declare const Typography: React.FC<TypographyProps>;
export default Typography;
