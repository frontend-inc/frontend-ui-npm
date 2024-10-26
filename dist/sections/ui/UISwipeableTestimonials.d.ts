import React from 'react';
import { TestimonialsProps } from '../../components/web/testimonials/Testimonials';
import { SectionProps, HeadingProps } from '../../types';
type UISwipeableTestimonialsProps = SectionProps & HeadingProps & TestimonialsProps;
declare const UISwipeableTestimonials: React.FC<UISwipeableTestimonialsProps>;
export default UISwipeableTestimonials;
