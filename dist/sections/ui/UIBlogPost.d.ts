import React from 'react';
import { BlogProps } from '../../components/ui/typography/Blog';
import { SectionProps } from '../../types';
type UIBlogPostProps = SectionProps & BlogProps;
declare const UIBlogPost: React.FC<UIBlogPostProps>;
export default UIBlogPost;
