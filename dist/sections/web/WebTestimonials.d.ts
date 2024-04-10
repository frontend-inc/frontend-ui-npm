import React from 'react';
import { TestimonialsProps } from '../../components/web/testimonials/Testimonials';
import { SectionProps, HeadingProps } from '../../types';
type WebTestimonialsProps = SectionProps & HeadingProps & TestimonialsProps;
declare const WebTestimonials: React.FC<WebTestimonialsProps>;
export default WebTestimonials;
