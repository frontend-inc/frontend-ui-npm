import React from 'react';
import { EmailSubscribeProps } from '../../components/cms/newsletter/EmailSubscribe';
import { SectionProps, StackProps, HeadingProps } from '../../types';
type FormEmailSubscribeProps = SectionProps & HeadingProps & StackProps & EmailSubscribeProps;
declare const FormEmailSubscribe: React.FC<FormEmailSubscribeProps>;
export default FormEmailSubscribe;
