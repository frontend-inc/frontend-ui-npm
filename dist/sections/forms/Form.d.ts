import React from 'react';
import { FormDataProps } from '../../components/cms/forms/FormData';
import { SectionProps } from '../../types';
type FormProps = SectionProps & FormDataProps;
declare const Form: React.FC<FormProps>;
export default Form;
