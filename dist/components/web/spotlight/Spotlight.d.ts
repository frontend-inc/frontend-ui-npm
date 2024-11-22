import React from 'react';
import { ButtonType } from '../../../types';
import { HeadingProps } from '../../../types';
export type SpotlightProps = HeadingProps & {
    image?: string;
    direction?: 'column' | 'row';
    buttons?: ButtonType[];
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const Spotlight: React.FC<SpotlightProps>;
export default Spotlight;
