import React from 'react';
import { CollectionProps } from '../../components/cms/collections/Collection';
import { SectionProps, HeadingProps } from '../../types';
type SocialFeedProps = SectionProps & HeadingProps & CollectionProps;
declare const SocialFeed: React.FC<SocialFeedProps>;
export default SocialFeed;
