import React from 'react';
import { PageHeaderProps } from '../../components/web/pages/PageHeader';
import { SectionProps } from '../../types';
type WebPageHeaderProps = SectionProps & PageHeaderProps;
declare const WebPageHeader: React.FC<WebPageHeaderProps>;
export default WebPageHeader;
