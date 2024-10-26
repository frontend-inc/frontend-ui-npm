import React from 'react';
type TabItemProps = {
    title: string;
    description: string;
    image?: string;
    active: boolean;
};
declare const TabItem: React.FC<TabItemProps>;
export default TabItem;
