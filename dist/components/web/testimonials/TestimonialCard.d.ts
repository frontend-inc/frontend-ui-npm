import React from 'react';
type TestimonialProps = {
    text: string;
    author: string;
    image?: string;
    size?: 'small' | 'large';
};
declare const TestimonialCard: React.FC<TestimonialProps>;
export default TestimonialCard;
