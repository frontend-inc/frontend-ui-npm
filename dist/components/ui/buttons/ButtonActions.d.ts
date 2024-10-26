import React from 'react';
import { ButtonType } from '../../../types';
type ButtonActionsProps = {
    buttons: ButtonType[];
    color?: string;
    size?: 'small' | 'medium' | 'large';
    justifyContent?: 'start' | 'center' | 'end';
};
declare const ButtonActions: React.FC<ButtonActionsProps>;
export default ButtonActions;
