import React from 'react';
import { ActionType } from '../../../types';
type ActionsProps = {
    actions: ActionType[];
    resource: any;
    justifyContent?: 'flex-start' | 'center' | 'flex-end';
};
declare const Actions: React.FC<ActionsProps>;
export default Actions;
