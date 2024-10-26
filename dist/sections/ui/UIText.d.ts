import React from 'react';
import { SectionProps, HeadingProps } from '../../types';
type UITextProps = SectionProps & HeadingProps & {
    text?: string;
};
declare const UIText: React.FC<UITextProps>;
export default UIText;
