import React from 'react';
type TestimonialProps = {
    text: string;
    author: string;
    image?: string;
    size?: 'small' | 'large';
    variant?: 'fill' | 'outline' | 'default';
};
declare const TestimonialCard: React.FC<TestimonialProps>;
export default TestimonialCard;
