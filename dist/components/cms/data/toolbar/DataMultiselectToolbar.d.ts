import React from 'react';
import { MultiselectButtonType, ToolbarButtonType } from '../../../../types';
type DataMultiselectToolbarProps = {
    buttons: MultiselectButtonType[];
    toolbarButtons?: ToolbarButtonType[];
};
declare const DataMultiselectToolbar: React.FC<DataMultiselectToolbarProps>;
export default DataMultiselectToolbar;
