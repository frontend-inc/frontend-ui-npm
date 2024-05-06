import React from 'react';
import { ShowProps } from '../../components/cms/show/Show';
import { SectionProps } from '../../types';
type CmsVimeoProps = SectionProps & ShowProps;
declare const CmsVimeo: React.FC<CmsVimeoProps>;
export default CmsVimeo;
