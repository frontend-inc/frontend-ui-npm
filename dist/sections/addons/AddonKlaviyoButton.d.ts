import React from 'react';
import { KlaviyoButtonProps } from '../../components/addons/klaviyo/KlaviyoButton';
import { SectionProps } from '../../types';
type AddonKlaviyoButtonProps = SectionProps & KlaviyoButtonProps;
declare const AddonKlaviyoButton: React.FC<AddonKlaviyoButtonProps>;
export default AddonKlaviyoButton;
