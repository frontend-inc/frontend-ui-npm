import React from 'react';
import { ButtonType } from '../../../types';
type ButtonActionsProps = {
    buttons: ButtonType[];
    size?: 'sm' | 'default' | 'lg';
    justifyContent?: 'start' | 'center' | 'end';
};
declare const ButtonActions: React.FC<ButtonActionsProps>;
export default ButtonActions;
