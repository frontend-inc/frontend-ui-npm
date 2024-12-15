import React from 'react';
import { MailchimpSubscribeProps } from '../../components/addons/mailchimp/MailchimpSubscribe';
import { SectionProps, StackProps, HeadingProps } from '../../types';
type AddonMailchimpSubscribeProps = SectionProps & HeadingProps & StackProps & MailchimpSubscribeProps;
declare const AddonMailchimpSubscribe: React.FC<AddonMailchimpSubscribeProps>;
export default AddonMailchimpSubscribe;
