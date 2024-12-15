import React from 'react';
import { KlaviyoSubscribeProps } from '../../components/addons/klaviyo/KlaviyoSubscribe';
import { SectionProps, StackProps, HeadingProps } from '../../types';
type AddonKlaviyoSubscribeProps = SectionProps & StackProps & HeadingProps & KlaviyoSubscribeProps;
declare const AddonKlaviyoSubscribe: React.FC<AddonKlaviyoSubscribeProps>;
export default AddonKlaviyoSubscribe;
