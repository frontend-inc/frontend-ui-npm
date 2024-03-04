import React from 'react';
type TestimonialsProps = {
    title?: string;
    testimonials: Record<string, any>[];
    autoPlay?: boolean;
    arrows?: boolean;
    showDots?: boolean;
};
declare const Testimonials: React.FC<TestimonialsProps>;
export default Testimonials;
