import React from 'react';
import { ActionType } from '../../../types';
type ActionMenuItemProps = {
    action: ActionType;
    variant?: 'text' | 'outlined' | 'contained';
    color?: 'primary' | 'secondary';
    resource: any;
    rest?: any;
};
declare const ActionMenuItem: React.FC<ActionMenuItemProps>;
export default ActionMenuItem;
