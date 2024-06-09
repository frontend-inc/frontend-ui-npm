import React from 'react';
import { ReviewsProps } from '../../components/social/reviews/Reviews';
import { SectionProps, HeadingProps } from '../../types';
type SocialReviewsProps = SectionProps & HeadingProps & ReviewsProps;
declare const SocialReviews: React.FC<SocialReviewsProps>;
export default SocialReviews;
