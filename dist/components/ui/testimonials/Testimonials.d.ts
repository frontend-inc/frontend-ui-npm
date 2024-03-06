import React from 'react';
type TestimonialsProps = {
    title?: string;
    layout?: 'grid' | 'carousel';
    testimonials: Record<string, any>[];
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
};
declare const Testimonials: React.FC<TestimonialsProps>;
export default Testimonials;
