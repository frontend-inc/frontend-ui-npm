import React from 'react';
type TestimonialsGridProps = {
    size?: 'small' | 'large';
    testimonials: Record<string, any>[];
};
declare const TestimonialsGrid: React.FC<TestimonialsGridProps>;
export default TestimonialsGrid;
