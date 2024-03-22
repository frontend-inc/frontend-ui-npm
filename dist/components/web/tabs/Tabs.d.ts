import React from 'react';
type TabsProps = {
    title?: string;
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
