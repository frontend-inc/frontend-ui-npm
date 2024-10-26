import React from 'react';
import { DocumentFormProps } from '../../components/cms/forms/DocumentForm';
import { SectionProps, HeadingProps } from '../../types';
type CmsFormProps = SectionProps & HeadingProps & DocumentFormProps;
declare const CmsForm: React.FC<CmsFormProps>;
export default CmsForm;
