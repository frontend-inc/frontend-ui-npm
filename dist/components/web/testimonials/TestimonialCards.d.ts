import React from 'react';
import { TestimonialType } from '../../../types';
type TestimonialCardsProps = {
    size?: 'small' | 'large';
    items: TestimonialType[];
};
declare const TestimonialCards: React.FC<TestimonialCardsProps>;
export default TestimonialCards;
