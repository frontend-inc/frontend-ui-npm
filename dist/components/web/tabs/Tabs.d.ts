import React from 'react';
export type TabsProps = {
    direction?: 'row' | 'column';
    items?: {
        icon?: string;
        label: string;
        title: string;
        description: string;
        image?: string;
    }[];
    editing?: boolean;
};
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
