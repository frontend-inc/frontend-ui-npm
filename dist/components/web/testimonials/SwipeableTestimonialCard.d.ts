import React from 'react';
type SwipeableTestimonialCardProps = {
    author: string;
    text: string;
    avatar: string;
    size?: 'small' | 'large';
    direction?: 'row' | 'column';
};
declare const SwipeableTestimonialCard: React.FC<SwipeableTestimonialCardProps>;
export default SwipeableTestimonialCard;
