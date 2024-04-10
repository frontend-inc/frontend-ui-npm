import React from 'react';
export type TabsProps = {
    orientation?: 'horizontal' | 'vertical';
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
