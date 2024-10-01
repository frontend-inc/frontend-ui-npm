import React from 'react';
type SwipeableTestimonialCardProps = {
    author: string;
    text: string;
    rating?: number;
    image?: string;
    avatar?: string;
    size?: 'small' | 'large';
};
declare const SwipeableTestimonialCard: React.FC<SwipeableTestimonialCardProps>;
export default SwipeableTestimonialCard;
