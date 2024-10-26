import React from 'react';
export type TabsProps = {
    items?: {
        icon?: string;
        label: string;
        title: string;
        description: string;
        image?: string;
    }[];
    editing?: boolean;
};
declare const CustomTabs: React.FC<TabsProps>;
export default CustomTabs;
