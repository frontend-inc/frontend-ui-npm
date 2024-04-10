import React from 'react';
import { GiftUpProps } from '../../components/addons/giftup/GiftUp';
import { SectionProps } from '../../types';
type AddonGiftUpProps = SectionProps & GiftUpProps;
declare const AddonGiftUp: React.FC<AddonGiftUpProps>;
export default AddonGiftUp;
