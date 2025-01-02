import React from 'react';
import { ActionType } from '../../../types';
type ButtonActionProps = {
    icon?: string;
    action: ActionType;
    color?: 'default' | 'primary' | 'secondary' | 'danger' | 'success';
    variant?: 'solid' | 'ghost' | 'light';
    size?: 'sm' | 'md' | 'lg';
    url?: string;
    path?: string;
    src?: string;
    children: React.ReactNode;
};
declare const ButtonAction: React.FC<ButtonActionProps>;
export default ButtonAction;
