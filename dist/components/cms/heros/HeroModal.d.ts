import React from 'react';
import { HeroProps } from './Hero';
export type HeroModalProps = HeroProps & {
    open: boolean;
    handleClose: () => void;
    url: string;
};
declare const HeroModal: React.FC<HeroModalProps>;
export default HeroModal;
