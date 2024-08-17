import React from 'react';
import { ActionType } from '../../../types';
type ActionProps = {
    icon?: string;
    color?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    variant?: 'text' | 'outlined' | 'contained';
    action: ActionType;
    actionId?: number;
    path?: string;
    onClick?: () => void;
    children: React.ReactNode;
};
declare const ButtonAction: React.FC<ActionProps>;
export default ButtonAction;
