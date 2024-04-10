import React from 'react';
import { CTAProps } from '../../components/web/CTA/CTA';
import { SectionProps } from '../../types';
type WebCTAProps = SectionProps & CTAProps;
declare const WebCTA: React.FC<WebCTAProps>;
export default WebCTA;
