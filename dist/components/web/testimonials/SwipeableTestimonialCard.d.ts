import React from 'react';
type SwipeableTestimonialCardProps = {
    author: string;
    text: string;
    rating?: number;
    image?: string;
    avatar?: string;
    size?: 'small' | 'large';
};
export default function SwipeableTestimonialCard(props?: SwipeableTestimonialCardProps): React.JSX.Element;
export {};
