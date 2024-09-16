import React from 'react';
import { ContactFormProps } from '../../components/cms/leads/ContactForm';
import { SectionProps } from '../../types';
type CmsContactFormProps = SectionProps & ContactFormProps;
declare const CmsContactForm: React.FC<CmsContactFormProps>;
export default CmsContactForm;
