import React from 'react';
import { CoverProps } from '../../components/web/covers/Cover';
import { SectionProps } from '../../types';
type UICoverProps = SectionProps & CoverProps;
declare const UICover: React.FC<UICoverProps>;
export default UICover;
