import React from 'react';
import { ButtonType, MenuLinkType } from '../../..';
type DesktopHeaderProps = {
    logo: string;
    links: MenuLinkType[];
    buttons: ButtonType[];
    enableAuth?: boolean;
    enableShopify?: boolean;
    enableStripe?: boolean;
    handleClick: (path: string) => void;
};
declare const DesktopHeader: React.FC<DesktopHeaderProps>;
export default DesktopHeader;
