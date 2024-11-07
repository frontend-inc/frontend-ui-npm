/// <reference types="react" />
export { default as UIAccordion } from './UIAccordion';
export { default as UICards } from './UICards';
export { default as UICover } from './UICover';
export { default as UICoverCarousel } from './UICoverCarousel';
export { default as UICallToAction } from './UICallToAction';
export { default as UIContactForm } from './UIContactForm';
export { default as UIEmailSubscribe } from './UIEmailSubscribe';
export { default as UIImage } from './UIImage';
export { default as UIFeatured } from './UIFeatured';
export { default as UIFeatures } from './UIFeatures';
export { default as UIHero } from './UIHero';
export { default as UILogos } from './UILogos';
export { default as UIPageHeader } from './UIPageHeader';
export { default as UIPricing } from './UIPricing';
export { default as UIProfile } from './UIProfile';
export { default as UISpotlight } from './UISpotlight';
export { default as UITabs } from './UITabs';
export { default as UITestimonials } from './UITestimonials';
export { default as UISwipeableTestimonials } from './UISwipeableTestimonials';
export { default as UIText } from './UIText';
export declare const UI: {
    Text: import("react").FC<import("../..").SectionProps & import("../..").HeadingProps & {
        text?: string;
    }>;
    SwipeableTestimonials: import("react").FC<import("../..").SectionProps & import("../..").HeadingProps & import("../../components/web/testimonials/Testimonials").TestimonialsProps>;
};
