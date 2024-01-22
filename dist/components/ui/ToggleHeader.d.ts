import React from "react";
import { TypographyVariants } from "../../types";
type ListExpandableProps = {
    expandable?: boolean;
    title?: string;
    icon?: React.ReactNode;
    children: any;
    enableBorder?: boolean;
    closed?: boolean;
    variant?: TypographyVariants;
};
declare const ListExpandable: React.FC<ListExpandableProps>;
export default ListExpandable;
