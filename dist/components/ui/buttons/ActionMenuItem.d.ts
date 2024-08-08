import React from 'react';
import { ButtonType } from '../../../types';
type ActionMenuItemProps = {
    action: ButtonType;
    variant?: 'text' | 'outlined' | 'contained';
    color?: 'primary' | 'secondary';
    resource: any;
    rest?: any;
};
declare const ActionMenuItem: React.FC<ActionMenuItemProps>;
export default ActionMenuItem;
