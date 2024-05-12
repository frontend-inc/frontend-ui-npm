import React from 'react';
import { ActionType } from '../../../types';
type ActionsProps = {
    actions: ActionType[];
    resource: any;
    numVisible?: number;
    justifyContent?: 'flex-start' | 'center' | 'flex-end';
};
declare const Actions: React.FC<ActionsProps>;
export default Actions;
