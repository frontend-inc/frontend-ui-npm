import React from 'react';
import { QuestionType } from '../../../types';
type AdminQuestionProps = {
    question: QuestionType;
    handleEdit: () => void;
};
declare const AdminQuestionDetails: React.FC<AdminQuestionProps>;
export default AdminQuestionDetails;
