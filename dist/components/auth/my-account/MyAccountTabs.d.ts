import React from 'react';
type MyAccountTabsProps = {
    tab?: number;
    enableStripe?: boolean;
    handleClick: (tab: any) => void;
};
declare const MyAccountTabs: React.FC<MyAccountTabsProps>;
export default MyAccountTabs;
