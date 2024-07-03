import React from 'react';
import { HeroProps } from './Hero';
export type HeroModalProps = HeroProps & {
    open: boolean;
    handleClose: () => void;
    url: string;
    enableComments?: boolean;
};
declare const HeroModal: React.FC<HeroModalProps>;
export default HeroModal;
