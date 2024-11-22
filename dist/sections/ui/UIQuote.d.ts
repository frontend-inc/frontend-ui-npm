import React from 'react';
import { QuoteProps } from '../../components/ui/typography/Quote';
import { SectionProps, HeadingProps } from '../../types';
type UIQuoteProps = SectionProps & HeadingProps & QuoteProps;
declare const UIQuote: React.FC<UIQuoteProps>;
export default UIQuote;
