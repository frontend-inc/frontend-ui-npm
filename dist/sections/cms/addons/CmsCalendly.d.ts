import React from 'react';
import { FieldCalendlyProps } from '../../../components/cms/addons/FieldCalendly';
import { SectionProps, HeadingProps } from '../../../types';
type CmsCalendlyProps = SectionProps & HeadingProps & FieldCalendlyProps;
declare const CmsCalendly: React.FC<CmsCalendlyProps>;
export default CmsCalendly;
