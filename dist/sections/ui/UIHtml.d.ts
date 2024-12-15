import React from 'react';
import { HtmlProps } from '../../components/ui/Html';
import { SectionProps } from '../../types';
type UIHtmlProps = SectionProps & HtmlProps;
declare const UIHtml: React.FC<UIHtmlProps>;
export default UIHtml;
