import React from 'react';
import { SpotlightProps } from '../../components/web/spotlights/Spotlight';
import { SectionProps } from '../../types';
type UISpotlightProps = SectionProps & SpotlightProps;
declare const UISpotlight: React.FC<UISpotlightProps>;
export default UISpotlight;
