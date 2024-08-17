import React from 'react';
import { DataListProps } from '../../components/cms/collections/DataList';
import { SectionProps, HeadingProps } from '../../types';
type SocialLikesProps = SectionProps & HeadingProps & DataListProps;
declare const SocialLikes: React.FC<SocialLikesProps>;
export default SocialLikes;
