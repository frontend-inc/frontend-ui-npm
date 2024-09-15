import React from 'react';
import { MenuLinkType } from '../../..';
type DesktopHeaderProps = {
    logo: string;
    links: MenuLinkType[];
    enableAuth?: boolean;
    enableShopify?: boolean;
    enableStripe?: boolean;
    handleClick: (path: string) => void;
};
declare const DesktopHeader: React.FC<DesktopHeaderProps>;
export default DesktopHeader;
