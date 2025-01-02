import React from 'react';
import { TextInputProps } from '../../../types';
export type EmailSubscribeInputProps = TextInputProps & {
    loading?: boolean;
    buttonText?: string;
    handleSubmit?: () => void;
    size?: 'sm' | 'md' | 'lg';
};
declare const EmailSubscribeInput: React.FC<EmailSubscribeInputProps>;
export default EmailSubscribeInput;
