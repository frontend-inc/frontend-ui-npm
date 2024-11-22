import React from 'react';
import { TestimonialsProps } from '../../components/web/testimonials/Testimonials';
import { SectionProps, StackProps, HeadingProps } from '../../types';
type UISwipeableTestimonialsProps = SectionProps & HeadingProps & StackProps & TestimonialsProps;
declare const UISwipeableTestimonials: React.FC<UISwipeableTestimonialsProps>;
export default UISwipeableTestimonials;
