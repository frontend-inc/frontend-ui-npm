import React from 'react';
import { FieldElementProps } from './Field';
type FieldMarkdownProps = FieldElementProps & {
    maxChars?: number;
    expandable?: boolean;
};
declare const FieldMarkdown: React.FC<FieldMarkdownProps>;
export default FieldMarkdown;
