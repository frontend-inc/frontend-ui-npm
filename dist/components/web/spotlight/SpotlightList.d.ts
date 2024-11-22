import React from 'react';
import { TypographyVariantsType } from '../../../types';
import { HeadingProps } from '../../../types';
export type SpotlightListProps = HeadingProps & {
    image?: string;
    textVariant?: TypographyVariantsType;
    actions?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    objectFit?: 'cover' | 'contain';
};
declare const Spotlight: React.FC<SpotlightListProps>;
export default Spotlight;
