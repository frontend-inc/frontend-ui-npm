import React from 'react';
import { ToolbarButtonType } from '../../../types';
type CollectionToolbarModalProps = {
    enableDelete?: boolean;
    enableAddToList?: boolean;
    toolbarButtons?: ToolbarButtonType[];
};
declare const CollectionToolbarModal: React.FC<CollectionToolbarModalProps>;
export default CollectionToolbarModal;
