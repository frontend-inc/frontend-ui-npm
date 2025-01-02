import React from 'react';
import { ButtonType, MenuLinkType } from '../../..';
export type HeaderProps = {
    logo?: string;
    links?: MenuLinkType[];
    buttons?: ButtonType[];
    bgColor?: string;
    enableAuth?: boolean;
    enableShopify?: boolean;
    enableStripe?: boolean;
    handleClick: (path: string) => void;
};
declare const Header: React.FC<HeaderProps>;
export default Header;
