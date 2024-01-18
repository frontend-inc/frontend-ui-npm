import React from 'react';
import { TypographyVariants } from 'types';
type ListProps = {
    expandable?: boolean;
    title?: string;
    icon?: React.ReactNode;
    children: any;
    enableBorder?: boolean;
    closed?: boolean;
    variant?: TypographyVariants;
    actions?: React.ReactNode;
};
declare const List: React.FC<ListProps>;
export default List;
