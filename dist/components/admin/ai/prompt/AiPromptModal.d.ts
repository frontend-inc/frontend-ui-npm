import React from 'react';
import { TextInputPropsType } from '../../../../types';
type AiPromptModalProps = TextInputPropsType & {
    loading?: boolean;
    label: string;
    handleSubmit: (ev: any) => void;
};
declare const AiPromptModal: React.FC<AiPromptModalProps>;
export default AiPromptModal;
