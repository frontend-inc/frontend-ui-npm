import React from 'react';
import { IframeProps } from '../../components/addons/iframe/Iframe';
import { SectionProps } from '../../types';
export type AddonIframeProps = SectionProps & IframeProps;
declare const AddonIframe: React.FC<AddonIframeProps>;
export default AddonIframe;
