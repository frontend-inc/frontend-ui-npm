import React from 'react';
import { SocialLinkType, MenuLinkType } from '../../../types';
export type FooterProps = {
    logo?: string;
    iOSUrl?: string;
    androidUrl?: string;
    enableNewsletter?: boolean;
    links: MenuLinkType[];
    socialLinks?: SocialLinkType[];
    handleClick: (path: string) => void;
};
export default function Footer(props: FooterProps): React.JSX.Element;
