import React from 'react';
import { AddonCalendlyProps } from '../../../components/cms/addons/AddonCalendly';
import { SectionProps, HeadingProps } from '../../../types';
type CmsCalendlyProps = SectionProps & HeadingProps & AddonCalendlyProps;
declare const CmsCalendly: React.FC<CmsCalendlyProps>;
export default CmsCalendly;
