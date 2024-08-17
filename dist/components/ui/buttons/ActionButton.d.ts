import React from 'react';
import { ButtonType, UserType } from '../../../types';
type ActionProps = {
    button: ButtonType;
    resource: any;
    user?: UserType;
    rest?: any;
};
declare const ActionButton: React.FC<ActionProps>;
export default ActionButton;
