import React from 'react';
import { ShowVimeoProps } from '../../components/cms/show/ShowVimeo';
import { SectionProps } from '../../types';
type CmsVimeoProps = SectionProps & ShowVimeoProps;
declare const CmsVimeo: React.FC<CmsVimeoProps>;
export default CmsVimeo;
