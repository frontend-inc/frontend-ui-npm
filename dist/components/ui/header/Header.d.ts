import React from 'react';
import { ButtonType, MenuLinkType } from '../../../types';
export type HeaderProps = {
    mode?: 'accent' | 'light' | 'dark';
    logo?: string;
    buttons?: ButtonType[];
    enableAuth?: boolean;
    enableStripe?: boolean;
    enableShopify?: boolean;
    enableNotifications?: boolean;
    links?: MenuLinkType[];
    handleClick: (path: string) => void;
};
declare const Header: React.FC<HeaderProps>;
export default Header;
