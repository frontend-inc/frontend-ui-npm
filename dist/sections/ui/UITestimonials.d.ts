import React from 'react';
import { TestimonialsProps } from '../../components/web/testimonials/Testimonials';
import { SectionProps, StackProps, HeadingProps } from '../../types';
type UITestimonialsProps = SectionProps & HeadingProps & StackProps & TestimonialsProps;
declare const UITestimonials: React.FC<UITestimonialsProps>;
export default UITestimonials;
