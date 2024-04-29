import React from 'react';
type ExpandableListProps = {
    children: React.ReactNode;
    id?: string;
    label?: string;
    icon?: React.ReactNode;
    enableBorder?: boolean;
    disablePadding?: boolean;
    closed?: boolean;
};
declare const ExpandableList: React.FC<ExpandableListProps>;
export default ExpandableList;
