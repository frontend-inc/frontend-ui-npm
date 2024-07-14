import React from 'react';
import { ListProps } from '../../components/cms/collections/List';
import { SectionProps, HeadingProps } from '../../types';
type SocialLikesProps = SectionProps & HeadingProps & ListProps;
declare const SocialLikes: React.FC<SocialLikesProps>;
export default SocialLikes;
