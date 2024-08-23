import React from 'react';
import { CollectionListProps } from '../../components/cms/collections/CollectionList';
import { SectionProps, HeadingProps } from '../../types';
type SocialLikesProps = SectionProps & HeadingProps & CollectionListProps;
declare const SocialLikes: React.FC<SocialLikesProps>;
export default SocialLikes;
