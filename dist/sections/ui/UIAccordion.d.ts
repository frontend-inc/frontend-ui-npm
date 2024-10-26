import React from 'react';
import { AccordionProps } from '../../components/web/accordions/Accordion';
import { SectionProps, HeadingProps } from '../../types';
type UIAccordionProps = SectionProps & HeadingProps & AccordionProps;
declare const UIAccordion: React.FC<UIAccordionProps>;
export default UIAccordion;
