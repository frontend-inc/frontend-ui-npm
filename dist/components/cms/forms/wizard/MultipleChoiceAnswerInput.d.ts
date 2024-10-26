import React from 'react';
import { AnswerType } from '../../../../types';
export type MultipleChoiceAnswerInputProps = {
    label?: string;
    layout?: 'list' | 'grid';
    direction?: 'row' | 'column';
    name: string;
    value?: any;
    answers: AnswerType[];
    handleChange: (e: any) => void;
    multiSelect?: boolean;
};
declare const MultipleChoiceAnswerInput: React.FC<MultipleChoiceAnswerInputProps>;
export default MultipleChoiceAnswerInput;
