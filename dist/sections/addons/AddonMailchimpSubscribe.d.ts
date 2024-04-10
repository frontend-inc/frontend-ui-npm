import React from 'react';
import { MailchimpSubscribeProps } from '../../components/addons/mailchimp/MailchimpSubscribe';
import { SectionProps, HeadingProps } from '../../types';
type AddonMailchimpSubscribeProps = SectionProps & HeadingProps & MailchimpSubscribeProps;
declare const AddonMailchimpSubscribe: React.FC<AddonMailchimpSubscribeProps>;
export default AddonMailchimpSubscribe;
