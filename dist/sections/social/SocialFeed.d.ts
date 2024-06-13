import React from 'react';
import { FeedProps } from '../../components/social/feed/Feed';
import { SectionProps, HeadingProps } from '../../types';
type SocialFeedProps = SectionProps & HeadingProps & FeedProps;
declare const SocialFeed: React.FC<SocialFeedProps>;
export default SocialFeed;
