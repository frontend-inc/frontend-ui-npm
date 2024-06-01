import React from 'react';
import { TestimonialsProps } from '../../components/web/testimonials/Testimonials';
import { SectionProps, HeadingProps } from '../../types';
type UITestimonialsProps = SectionProps & HeadingProps & TestimonialsProps;
declare const UITestimonials: React.FC<UITestimonialsProps>;
export default UITestimonials;
