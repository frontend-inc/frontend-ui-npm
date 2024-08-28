import React from 'react';
import { MultiselectButtonType } from '../../../../types';
type ResourceToolbarButtonsProps = {
    selected: any[];
    selectedIds: number[] | string[];
    buttons: MultiselectButtonType[];
};
declare const ResourceToolbarButtons: React.FC<ResourceToolbarButtonsProps>;
export default ResourceToolbarButtons;
