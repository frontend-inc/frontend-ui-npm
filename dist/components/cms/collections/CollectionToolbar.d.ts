import React from 'react';
import { ToolbarButtonType } from '../../../types';
type CollectionToolbarModalProps = {
    enableDelete?: boolean;
    enableAddToList?: boolean;
    toolbarButtons?: ToolbarButtonType[];
};
declare const CollectionToolbar: React.FC<CollectionToolbarModalProps>;
export default CollectionToolbar;
