import React from 'react';
import { HeroHeaderProps } from '../../components/cms/heros/HeroHeader';
import { SectionProps } from '../../types';
type CmsHeaderProps = SectionProps & HeroHeaderProps;
declare const CmsHeader: React.FC<CmsHeaderProps>;
export default CmsHeader;
