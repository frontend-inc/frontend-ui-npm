import React from 'react';
import { AccordionProps } from '../../components/web/accordions/Accordion';
import { SectionProps, StackProps, HeadingProps } from '../../types';
type UIAccordionProps = SectionProps & HeadingProps & StackProps & AccordionProps;
declare const UIAccordion: React.FC<UIAccordionProps>;
export default UIAccordion;
