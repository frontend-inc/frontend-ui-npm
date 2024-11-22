import React from 'react';
import { TypographyVariantsType } from '../../../types';
export type BlogProps = {
    image?: string;
    label?: string;
    title?: string;
    subtitle?: string;
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
