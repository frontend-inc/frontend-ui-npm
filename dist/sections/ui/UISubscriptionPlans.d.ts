import React from 'react';
import { SubscriptionPlansProps } from '../../components/web/subscriptions/SubscriptionPlans';
import { SectionProps, HeadingProps } from '../../types';
type UISubscriptionPlansProps = SectionProps & HeadingProps & SubscriptionPlansProps;
declare const UISubscriptionPlans: React.FC<UISubscriptionPlansProps>;
export default UISubscriptionPlans;
