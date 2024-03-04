import React from 'react';
type TestimonialProps = {
    author: string;
    text: string;
    rating: number;
    image: string;
    height?: number;
    width?: number;
};
declare const TestimonialCard: React.FC<TestimonialProps>;
export default TestimonialCard;
