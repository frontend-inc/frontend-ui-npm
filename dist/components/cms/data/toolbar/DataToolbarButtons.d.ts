import React from 'react';
import { ResourceButtonType } from '../../../../types';
type ResourceToolbarButtonsProps = {
    selected?: any[];
    selectedIds?: number[] | string[];
    buttons: ResourceButtonType[];
};
declare const DataToolbarButtons: React.FC<ResourceToolbarButtonsProps>;
export default DataToolbarButtons;
