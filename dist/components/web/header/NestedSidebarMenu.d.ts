import React from 'react';
import { MenuLinkType } from '../../../types';
export declare function organizeLinks(links: MenuLinkType[]): MenuLinkType[];
interface NestedSidebarMenuProps {
    links: MenuLinkType[];
    handleClick: (path: string) => void;
}
export default function NestedSidebarMenu({ links, handleClick, }: NestedSidebarMenuProps): React.JSX.Element;
export {};
