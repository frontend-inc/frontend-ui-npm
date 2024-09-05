import React from 'react';
import { SyntheticEventType } from '../../../../types';
type AiPromptFormProps = {
    open: boolean;
    value: string;
    label?: string;
    placeholder?: string;
    handleChange: (ev: SyntheticEventType) => void;
};
declare const AiPromptForm: React.FC<AiPromptFormProps>;
export default AiPromptForm;
