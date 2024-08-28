import React from 'react';
import { CommentListProps } from '../../components/social/comments/CommentList';
import { SectionProps, HeadingProps } from '../../types';
type SocialCommentsProps = SectionProps & HeadingProps & CommentListProps;
declare const SocialComments: React.FC<SocialCommentsProps>;
export default SocialComments;
