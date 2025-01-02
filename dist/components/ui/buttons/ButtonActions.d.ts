import React from 'react';
import { ButtonType } from '../../../types';
export type ButtonActionsProps = {
    buttons: ButtonType[];
    size?: 'sm' | 'md' | 'lg';
    justifyContent?: 'justify-start' | 'justify-center' | 'justify-end';
    className?: string;
};
declare const ButtonActions: React.FC<ButtonActionsProps>;
export default ButtonActions;
