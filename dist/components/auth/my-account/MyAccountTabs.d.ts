import React from 'react';
type MyAccountMenuProps = {
    tab?: number;
    enableStripe?: boolean;
    handleClick: (tab: any) => void;
};
declare const MyAccountMenu: React.FC<MyAccountMenuProps>;
export default MyAccountMenu;
