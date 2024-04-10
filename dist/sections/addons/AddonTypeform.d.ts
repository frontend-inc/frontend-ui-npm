import React from 'react';
import { TypeformProps } from '../../components/addons/typeform/Typeform';
import { SectionProps } from '../../types';
type AddonTypeformProps = SectionProps & TypeformProps;
declare const AddonTypeform: React.FC<AddonTypeformProps>;
export default AddonTypeform;
