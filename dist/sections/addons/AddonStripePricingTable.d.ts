import React from 'react';
import { StripePricingTableProps } from '../../components/addons/stripe/StripePricingTable';
import { SectionProps } from '../../types';
type AddonStripePricingTableProps = SectionProps & StripePricingTableProps;
declare const AddonStripePricingTable: React.FC<AddonStripePricingTableProps>;
export default AddonStripePricingTable;
