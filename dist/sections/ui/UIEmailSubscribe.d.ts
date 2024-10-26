import React from 'react';
import { EmailSubscribeProps } from '../../components/cms/newsletter/EmailSubscribe';
import { SectionProps } from '../../types';
type UIEmailSubscribeProps = SectionProps & EmailSubscribeProps;
declare const UIEmailSubscribe: React.FC<UIEmailSubscribeProps>;
export default UIEmailSubscribe;
