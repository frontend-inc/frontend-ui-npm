import React from 'react';
import { ButtonType } from '../../../types';
type ActionProps = {
    action: ButtonType;
    resource: any;
    rest?: any;
};
declare const ActionButton: React.FC<ActionProps>;
export default ActionButton;
