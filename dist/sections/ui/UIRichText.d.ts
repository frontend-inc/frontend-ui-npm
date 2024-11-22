import React from 'react';
import { RichTextProps } from '../../components/ui/typography/RichText';
import { SectionProps } from '../../types';
type UIRichTextProps = SectionProps & RichTextProps;
declare const UIRichText: React.FC<UIRichTextProps>;
export default UIRichText;
