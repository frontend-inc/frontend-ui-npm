import React from 'react';
import { ListProps } from '../../components/cms/collections/List';
import { SectionProps, HeadingProps } from '../../types';
type SocialFeedProps = SectionProps & HeadingProps & ListProps;
declare const SocialFeed: React.FC<SocialFeedProps>;
export default SocialFeed;
