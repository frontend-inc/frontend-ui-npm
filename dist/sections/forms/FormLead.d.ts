import React from 'react';
import { LeadFormProps } from '../../components/cms/leads/LeadForm';
import { SectionProps, StackProps, HeadingProps } from '../../types';
type FormContactUsProps = SectionProps & HeadingProps & StackProps & LeadFormProps;
declare const FormLead: React.FC<FormContactUsProps>;
export default FormLead;
