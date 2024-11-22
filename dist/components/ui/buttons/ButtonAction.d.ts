import React from 'react';
import { ActionType } from '../../../types';
type ButtonActionProps = {
    icon?: string;
    action: ActionType;
    variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
    size?: 'sm' | 'default' | 'lg';
    url?: string;
    path?: string;
    src?: string;
    children: React.ReactNode;
};
declare const ButtonAction: React.FC<ButtonActionProps>;
export default ButtonAction;
