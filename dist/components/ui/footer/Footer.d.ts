import React from 'react';
import { MenuLinkType } from '../../../types';
type FooterProps = {
    menuItems?: MenuLinkType[];
    socialUrls?: string[];
    handleClick: (path: string) => void;
    enableEmail?: boolean;
    emailProvider?: 'mailchimp' | 'klaviyo';
    mailchimpFormId?: string;
    klaviyoListId?: string;
    klaviyoApiKey?: string;
};
declare const Footer: React.FC<FooterProps>;
export default Footer;
