import React from 'react';
import { ButtonType } from '../../../types';
type ButtonActionProps = Omit<ButtonType, 'label'> & {
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
};
declare const ButtonAction: React.FC<ButtonActionProps>;
export default ButtonAction;
