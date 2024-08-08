import React from 'react';
import { ButtonType } from '../../../types';
type ActionButtonsProps = {
    buttons: ButtonType[];
    resource: any;
    numVisible?: number;
    color?: string;
    justifyContent?: 'flex-start' | 'center' | 'flex-end';
};
declare const ActionButtons: React.FC<ActionButtonsProps>;
export default ActionButtons;
