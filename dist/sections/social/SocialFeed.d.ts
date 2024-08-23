import React from 'react';
import { CollectionListProps } from '../../components/cms/collections/CollectionList';
import { SectionProps, HeadingProps } from '../../types';
type SocialFeedProps = SectionProps & HeadingProps & CollectionListProps;
declare const SocialFeed: React.FC<SocialFeedProps>;
export default SocialFeed;
