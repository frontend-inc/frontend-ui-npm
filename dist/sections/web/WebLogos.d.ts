import React from 'react';
import { LogosProps } from '../../components/web/logos/Logos';
import { SectionProps } from '../../types';
type WebLogosProps = SectionProps & LogosProps;
declare const WebLogos: React.FC<WebLogosProps>;
export default WebLogos;
