import React from 'react';
import { ResourceButtonType } from '../../../../types';
type DataToolbarModalProps = {
    buttons: ResourceButtonType[];
    component?: React.FC<any>;
};
declare const DataToolbarModal: React.FC<DataToolbarModalProps>;
export default DataToolbarModal;
