import React from 'react';
import { TextProps } from '../../components/web/text/Text';
import { SectionProps, HeadingProps } from '../../types';
type UITextProps = SectionProps & HeadingProps & TextProps;
declare const UIText: React.FC<UITextProps>;
export default UIText;
