import React from 'react';
import { ButtonType } from '../../../types';
export type SpotlightProps = {
    label?: string;
    title?: string;
    description?: string;
    image?: string;
    logos: {
        image: string;
        title: string;
    }[];
    style?: 'card' | 'list';
    buttons?: ButtonType[];
};
declare const Spotlight: React.FC<SpotlightProps>;
export default Spotlight;
