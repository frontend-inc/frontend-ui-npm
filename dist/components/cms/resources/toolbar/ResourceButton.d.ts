import React from 'react';
import { ResourceButtonType } from '../../../../types';
export type ResourceButtonProps = {
    button: ResourceButtonType;
    selected: any[];
};
declare const ResourceButton: React.FC<ResourceButtonProps>;
export default ResourceButton;
