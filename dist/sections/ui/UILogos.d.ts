import React from 'react';
import { LogosProps } from '../../components/web/logos/Logos';
import { SectionProps, HeadingProps } from '../../types';
type UILogosProps = SectionProps & HeadingProps & LogosProps;
declare const UILogos: React.FC<UILogosProps>;
export default UILogos;
