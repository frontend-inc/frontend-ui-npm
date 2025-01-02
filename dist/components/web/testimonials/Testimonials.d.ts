import React from 'react';
import { TestimonialType } from '../../../types';
export type TestimonialsProps = {
    layout?: 'grid' | 'carousel';
    items: TestimonialType[];
    variant?: 'fill' | 'outline' | 'default';
};
declare const Testimonials: React.FC<TestimonialsProps>;
export default Testimonials;
