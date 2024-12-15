import React from 'react';
import { TypographyVariantsType } from '../../../types';
import { HeadingProps } from '../../../types';
export type BlogProps = HeadingProps & {
    image?: string;
    description?: string;
    publishedAt?: string;
    author?: string;
    avatar?: string;
    tags?: string[];
    html: string;
    textAlign?: 'left' | 'center' | 'right';
    variant?: TypographyVariantsType;
};
declare const Blog: React.FC<BlogProps>;
export default Blog;
