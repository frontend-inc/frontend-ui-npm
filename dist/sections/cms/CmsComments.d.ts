import React from 'react';
import { CommentListProps } from '../../components/social/comments/CommentList';
import { SectionProps, HeadingProps } from '../../types';
type CmsCommentsProps = SectionProps & HeadingProps & CommentListProps;
declare const CmsComments: React.FC<CmsCommentsProps>;
export default CmsComments;
