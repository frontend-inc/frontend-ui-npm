import React from "react";
type ListItemProps = {
    primary: string;
    secondary?: string;
    label?: string;
    icon?: React.ReactNode;
    selected?: boolean;
    showMenu?: boolean;
    handleClick?: (item: any) => void;
    handleEdit?: (item: any) => void;
    handleDelete?: (item: any) => void;
};
declare const ListItem: React.FC<ListItemProps>;
export default ListItem;
