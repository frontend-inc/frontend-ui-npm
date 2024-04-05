import React from 'react';
import { ActionType } from '../../../types';
type ActionsProps = {
    actions: ActionType[];
    resource: any;
};
declare const Actions: React.FC<ActionsProps>;
export default Actions;
