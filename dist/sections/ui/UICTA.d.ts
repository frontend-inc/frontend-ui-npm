import React from 'react';
import { CTAProps } from '../../components/web/CTA/CTA';
import { SectionProps } from '../../types';
type UICTAProps = SectionProps & CTAProps;
declare const UICTA: React.FC<UICTAProps>;
export default UICTA;
