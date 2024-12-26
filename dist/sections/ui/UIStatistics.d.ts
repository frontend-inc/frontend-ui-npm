import React from 'react';
import { StatisticsProps } from '../../components/web/statistics/Statistics';
import { SectionProps, StackProps, HeadingProps } from '../../types';
type UIStatisticsProps = SectionProps & HeadingProps & StackProps & StatisticsProps;
declare const UIStatistics: React.FC<UIStatisticsProps>;
export default UIStatistics;
