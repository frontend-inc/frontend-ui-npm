import React from 'react';
import { BlogProps } from '../../components/ui/typography/Blog';
import { SectionProps } from '../../types';
type UIBlogProps = SectionProps & BlogProps;
declare const UIBlog: React.FC<UIBlogProps>;
export default UIBlog;
