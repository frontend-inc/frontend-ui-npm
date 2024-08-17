import React from 'react';
import { DataListProps } from '../../components/cms/collections/DataList';
import { SectionProps, HeadingProps } from '../../types';
type SocialFeedProps = SectionProps & HeadingProps & DataListProps;
declare const SocialFeed: React.FC<SocialFeedProps>;
export default SocialFeed;
