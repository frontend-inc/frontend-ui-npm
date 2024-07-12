import React from 'react';
import { CollectionProps } from '../../components/cms/collections/Collection';
import { SectionProps, HeadingProps } from '../../types';
type SocialLikesProps = SectionProps & HeadingProps & CollectionProps;
declare const SocialLikes: React.FC<SocialLikesProps>;
export default SocialLikes;
