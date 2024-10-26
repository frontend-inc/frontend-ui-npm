import React from 'react';
type AdminTabIconsProps = {
    logo?: string;
    menuItems: any[];
    handleClick: (item: any) => void;
    secondaryAction?: React.ReactNode;
};
export default function AdminTabIcons({ logo, menuItems, handleClick, secondaryAction, }: AdminTabIconsProps): React.JSX.Element;
export {};
