import React from 'react';
import { CallToActionProps } from '../../components/web/cta/CallToAction';
import { SectionProps } from '../../types';
type UICallToActionProps = SectionProps & CallToActionProps;
declare const UICallToAction: React.FC<UICallToActionProps>;
export default UICallToAction;
