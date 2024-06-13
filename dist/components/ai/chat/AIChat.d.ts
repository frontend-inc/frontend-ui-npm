import React from 'react';
import { TextInputPropsType } from '../../../types';
export type AIChatProps = TextInputPropsType & {
    avatar?: string;
    id?: string;
    label: string;
    prompt?: string;
    buttonText?: string;
};
declare const AIChat: React.FC<AIChatProps>;
export default AIChat;
