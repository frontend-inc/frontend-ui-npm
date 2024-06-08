import React from 'react';
import { CalendlyProps } from '../../components/addons/calendly/Calendly';
import { SectionProps } from '../../types';
export type AddonCalendlyProps = SectionProps & CalendlyProps;
declare const AddonCalendly: React.FC<AddonCalendlyProps>;
export default AddonCalendly;
