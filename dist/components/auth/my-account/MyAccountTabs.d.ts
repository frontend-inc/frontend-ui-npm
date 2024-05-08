import React from 'react';
type MyAccountTabsProps = {
    tab?: number;
    handleChange?: (ev: any, newValue: number) => void;
};
declare const MyAccountTabs: React.FC<MyAccountTabsProps>;
export default MyAccountTabs;
