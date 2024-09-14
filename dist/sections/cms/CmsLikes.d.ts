import React from 'react';
import { CollectionListProps } from '../../components/cms/collections/CollectionList';
import { SectionProps, HeadingProps } from '../../types';
type CmsLikesProps = SectionProps & HeadingProps & CollectionListProps;
declare const CmsLikes: React.FC<CmsLikesProps>;
export default CmsLikes;
