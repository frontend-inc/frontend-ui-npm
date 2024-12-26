import React from 'react';
import { TextInputProps } from '../../../types';
export type AIChatProps = TextInputProps & {
    avatar?: string;
    id?: string;
    label: string;
    prompt?: string;
    buttonText?: string;
};
declare const AIChat: React.FC<AIChatProps>;
export default AIChat;
