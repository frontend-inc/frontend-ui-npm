import React from 'react';
import { ActionType } from '../../../types';
type ActionProps = {
    action: ActionType;
    resource: any;
    rest?: any;
};
declare const ActionButton: React.FC<ActionProps>;
export default ActionButton;
