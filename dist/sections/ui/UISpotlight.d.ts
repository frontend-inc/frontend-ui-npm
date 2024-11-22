import React from 'react';
import { SpotlightProps } from '../../components/web/spotlight/Spotlight';
import { SectionProps } from '../../types';
type UISpotlightProps = SectionProps & SpotlightProps;
declare const UISpotlight: React.FC<UISpotlightProps>;
export default UISpotlight;
