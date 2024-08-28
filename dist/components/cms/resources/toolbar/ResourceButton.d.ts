import React from 'react';
import { MultiselectButtonType } from '../../../../types';
export type ResourceButtonProps = {
    button: MultiselectButtonType;
    selected: any[];
};
declare const ResourceButton: React.FC<ResourceButtonProps>;
export default ResourceButton;
