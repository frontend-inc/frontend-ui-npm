import React from 'react';
import { ButtonType } from '../../../types';
export type CallToActionProps = {
    label?: string;
    title: string;
    subtitle: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    buttons: ButtonType[];
    direction?: string;
};
declare const CallToAction: React.FC<CallToActionProps>;
export default CallToAction;
