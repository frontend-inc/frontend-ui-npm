import React from 'react';
import { AnswerType } from '../../../types';
type AdminAnswerProps = {
    question: AnswerType;
    handleEdit: () => void;
};
declare const AdminAnswerDetails: React.FC<AdminAnswerProps>;
export default AdminAnswerDetails;
