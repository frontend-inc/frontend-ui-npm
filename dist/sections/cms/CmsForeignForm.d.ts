import React from 'react';
import { ForeignFormProps } from '../../components/cms/forms/ForeignForm';
import { SectionProps, HeadingProps } from '../../types';
type CmsForeignFormProps = SectionProps & HeadingProps & ForeignFormProps;
declare const CmsForeignForm: React.FC<CmsForeignFormProps>;
export default CmsForeignForm;
