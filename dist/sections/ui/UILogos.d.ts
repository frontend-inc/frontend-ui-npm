import React from 'react';
import { LogosProps } from '../../components/web/logos/Logos';
import { SectionProps } from '../../types';
type UILogosProps = SectionProps & LogosProps;
declare const UILogos: React.FC<UILogosProps>;
export default UILogos;
