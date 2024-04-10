import React from 'react';
import { AccordionProps } from '../../components/web/accordions/Accordion';
import { SectionProps, HeadingProps } from '../../types';
type WebAccordionProps = SectionProps & HeadingProps & AccordionProps;
declare const WebAccordion: React.FC<WebAccordionProps>;
export default WebAccordion;
