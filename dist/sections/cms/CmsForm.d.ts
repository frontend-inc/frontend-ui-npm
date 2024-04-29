import React from 'react';
import { CollectionFormProps } from '../../components/cms/forms/CollectionForm';
import { SectionProps, HeadingProps } from '../../types';
type CmsFormProps = SectionProps & HeadingProps & CollectionFormProps;
declare const CmsForm: React.FC<CmsFormProps>;
export default CmsForm;
