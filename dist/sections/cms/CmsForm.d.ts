import React from 'react';
import { FormProps } from '../../components/cms/forms/Form';
import { SectionProps, HeadingProps } from '../../types';
type CmsFormProps = SectionProps & HeadingProps & FormProps;
declare const CmsForm: React.FC<CmsFormProps>;
export default CmsForm;
