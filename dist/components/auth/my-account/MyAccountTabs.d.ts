import React from 'react';
type MyAccountTabsProps = {
    tab?: number;
    enableTeams?: boolean;
    enableStripe?: boolean;
    handleChange?: (ev: any, newValue: number) => void;
};
declare const MyAccountTabs: React.FC<MyAccountTabsProps>;
export default MyAccountTabs;
