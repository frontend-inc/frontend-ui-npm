import React from 'react';
import { TypographyVariantsType } from '../../types';
type ListExpandableProps = {
    expandable?: boolean;
    title?: string;
    icon?: React.ReactNode;
    children: any;
    enableBorder?: boolean;
    closed?: boolean;
    variant?: TypographyVariantsType;
};
declare const ListExpandable: React.FC<ListExpandableProps>;
export default ListExpandable;
