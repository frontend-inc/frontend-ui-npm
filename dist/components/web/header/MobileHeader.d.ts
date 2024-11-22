import React from 'react';
import { ButtonType, MenuLinkType } from '../../..';
type MobileHeaderProps = {
    bgColor?: string;
    logo: string;
    logoWidth?: number;
    logoHeight?: number;
    links: MenuLinkType[];
    buttons: ButtonType[];
    enableAuth?: boolean;
    enableShopify?: boolean;
    enableStripe?: boolean;
    enableNotifications?: boolean;
    handleClick: (path: string) => void;
};
declare const MobileHeader: React.FC<MobileHeaderProps>;
export default MobileHeader;
