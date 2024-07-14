import React from 'react';
import { ShowHeaderProps } from '../../components/cms/show/ShowHeader';
import { SectionProps } from '../../types';
type CmsHeaderProps = SectionProps & ShowHeaderProps;
declare const CmsHeader: React.FC<CmsHeaderProps>;
export default CmsHeader;
