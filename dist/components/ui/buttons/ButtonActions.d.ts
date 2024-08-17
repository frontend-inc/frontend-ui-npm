import React from 'react';
import { ButtonType, UserType } from '../../../types';
type ButtonActionsProps = {
    buttons: ButtonType[];
    resource: any;
    user?: UserType;
    numVisible?: number;
    color?: string;
    size?: 'small' | 'medium' | 'large';
    justifyContent?: 'flex-start' | 'center' | 'flex-end';
};
declare const ButtonActions: React.FC<ButtonActionsProps>;
export default ButtonActions;
