import React from 'react';
import { ResourceButtonType } from '../../../../types';
export type DataButtonProps = {
    button: ResourceButtonType;
    selected: any[];
};
declare const DataButton: React.FC<DataButtonProps>;
export default DataButton;
