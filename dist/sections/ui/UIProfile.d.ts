import React from 'react';
import { ProfileProps } from '../../components/ui/profiles/Profile';
import { SectionProps } from '../../types';
type UIProfileProps = SectionProps & ProfileProps;
declare const UIProfile: React.FC<UIProfileProps>;
export default UIProfile;
