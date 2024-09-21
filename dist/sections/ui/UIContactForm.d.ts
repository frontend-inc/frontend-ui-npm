import React from 'react';
import { ContactFormProps } from '../../components/cms/leads/ContactForm';
import { SectionProps } from '../../types';
type UIContactFormProps = SectionProps & ContactFormProps;
declare const UIContactForm: React.FC<UIContactFormProps>;
export default UIContactForm;
