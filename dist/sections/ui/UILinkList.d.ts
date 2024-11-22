import React from 'react';
import { LinkListProps } from '../../components/web/links/LinkList';
import { SectionProps, StackProps, HeadingProps } from '../../types';
type UILinkListProps = SectionProps & HeadingProps & StackProps & LinkListProps;
declare const UILinkList: React.FC<UILinkListProps>;
export default UILinkList;
