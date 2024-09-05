import React from 'react';
import { TextInputPropsType } from '../../../../types';
type AiChatModalProps = TextInputPropsType & {
    prompt?: string;
    id?: string;
};
declare const AiChatModal: React.FC<AiChatModalProps>;
export default AiChatModal;
