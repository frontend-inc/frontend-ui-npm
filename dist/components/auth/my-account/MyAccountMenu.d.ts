import React from 'react';
type MyAccountMenuProps = {
    tab?: number;
    enableTeams?: boolean;
    enableStripe?: boolean;
    handleChange: (ev: any, newValue: number) => void;
};
declare const MyAccountMenu: React.FC<MyAccountMenuProps>;
export default MyAccountMenu;
