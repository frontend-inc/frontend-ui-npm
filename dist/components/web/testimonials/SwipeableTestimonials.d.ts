import React from 'react';
type SwipeableTestimonialsProps = {
    variant?: 'default' | 'fill' | 'outline';
    items: Record<string, any>[];
    enableAutoPlay?: boolean;
};
declare const SwipeableTestimonials: React.FC<SwipeableTestimonialsProps>;
export default SwipeableTestimonials;
