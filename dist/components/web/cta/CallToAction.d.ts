import React from 'react';
import { ButtonType, TypographyVariantsType } from '../../../types';
export type CallToActionProps = {
    label?: string;
    title: string;
    description: string;
    textVariant?: TypographyVariantsType;
    buttons: ButtonType[];
    direction?: string;
};
declare const CallToAction: React.FC<CallToActionProps>;
export default CallToAction;
