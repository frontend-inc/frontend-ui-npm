import React from 'react';
import { LinkListProps } from '../../components/web/links/LinkList';
import { SectionProps, StackProps, HeadingProps } from '../../types';
type UILinksProps = SectionProps & HeadingProps & StackProps & LinkListProps;
declare const UILinks: React.FC<UILinksProps>;
export default UILinks;
