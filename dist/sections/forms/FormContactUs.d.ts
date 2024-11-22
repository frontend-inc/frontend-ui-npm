import React from 'react';
import { ContactFormProps } from '../../components/cms/leads/ContactForm';
import { SectionProps, StackProps, HeadingProps } from '../../types';
type FormContactUsProps = SectionProps & HeadingProps & StackProps & ContactFormProps;
declare const FormContactUs: React.FC<FormContactUsProps>;
export default FormContactUs;
