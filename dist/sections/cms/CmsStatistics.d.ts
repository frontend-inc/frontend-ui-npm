import React from 'react';
import { StatisticsProps } from '../../components/cms/analytics/Statistics';
import { SectionProps, HeadingProps } from '../../types';
type CmsStatisticsProps = SectionProps & HeadingProps & StatisticsProps;
declare const CmsStatistics: React.FC<CmsStatisticsProps>;
export default CmsStatistics;
