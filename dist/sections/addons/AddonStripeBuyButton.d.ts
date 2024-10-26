import React from 'react';
import { StripeBuyButtonProps } from '../../components/addons/stripe/StripeBuyButton';
import { SectionProps } from '../../types';
type AddonStripeBuyButtonProps = SectionProps & StripeBuyButtonProps;
declare const AddonStripeBuyButton: React.FC<AddonStripeBuyButtonProps>;
export default AddonStripeBuyButton;
