import React from 'react';
import { DetailsProps } from '../../components/cms/details/Details';
import { SectionProps } from '../../types';
type CmsDetailsProps = SectionProps & DetailsProps;
declare const CmsDetails: React.FC<CmsDetailsProps>;
export default CmsDetails;
