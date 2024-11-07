import React from 'react';
import { TestimonialType } from '../../../types';
export type TestimonialsProps = {
    layout?: 'grid' | 'carousel';
    items: TestimonialType[];
    enableAutoPlay?: boolean;
};
declare const Testimonials: React.FC<TestimonialsProps>;
export default Testimonials;
