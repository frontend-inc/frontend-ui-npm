import React from 'react';
import { CommentsProps } from '../../components/social/comments/Comments';
import { SectionProps, HeadingProps } from '../../types';
type SocialCommentsProps = SectionProps & HeadingProps & CommentsProps;
declare const SocialComments: React.FC<SocialCommentsProps>;
export default SocialComments;
