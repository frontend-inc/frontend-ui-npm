import React from 'react';
export type TestimonialsProps = {
    layout?: 'grid' | 'carousel';
    items: Record<string, any>[];
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
};
declare const Testimonials: React.FC<TestimonialsProps>;
export default Testimonials;
