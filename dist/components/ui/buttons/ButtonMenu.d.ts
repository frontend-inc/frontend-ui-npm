import React from 'react';
import { ActionType } from '../../../types';
type ButtonMenuProps = {
    action: ActionType;
    actionId?: number;
    path?: string;
    icon?: string;
    label: string;
    variant?: 'text' | 'outlined' | 'contained';
    color?: 'primary' | 'secondary';
    onClick?: (ev: any) => void;
};
declare const ButtonMenu: React.FC<ButtonMenuProps>;
export default ButtonMenu;
