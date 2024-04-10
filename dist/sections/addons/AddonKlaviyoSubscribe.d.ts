import React from 'react';
import { KlaviyoSubscribeProps } from '../../components/addons/klaviyo/KlaviyoSubscribe';
import { SectionProps, HeadingProps } from '../../types';
type AddonKlaviyoSubscribeProps = SectionProps & HeadingProps & KlaviyoSubscribeProps;
declare const AddonKlaviyoSubscribe: React.FC<AddonKlaviyoSubscribeProps>;
export default AddonKlaviyoSubscribe;
