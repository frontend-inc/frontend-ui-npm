import React from 'react';
import { MultiselectButtonType } from '../../../../types';
type ResourceToolbarModalProps = {
    open: boolean;
    handleClose: () => void;
    actions: React.ReactNode;
    selected?: any[];
    selectedIds?: number[] | string[];
    buttons: MultiselectButtonType[];
    component?: React.FC<any>;
};
declare const ResourceToolbarModal: React.FC<ResourceToolbarModalProps>;
export default ResourceToolbarModal;
