import React from 'react';
import { PageHeaderProps } from '../../components/web/pages/PageHeader';
import { SectionProps } from '../../types';
type UIPageHeaderProps = SectionProps & PageHeaderProps;
declare const UIPageHeader: React.FC<UIPageHeaderProps>;
export default UIPageHeader;
