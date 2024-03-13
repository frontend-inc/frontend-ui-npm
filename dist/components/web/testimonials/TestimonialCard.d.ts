import React from 'react';
type TestimonialProps = {
    author: string;
    text: string;
    rating: number;
    image: string;
    size: 'small' | 'large';
};
declare const TestimonialCard: React.FC<TestimonialProps>;
export default TestimonialCard;
