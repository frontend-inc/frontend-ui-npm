import React from 'react';
import { FormProps } from './Form';
export type FormModalProps = FormProps & {
    title?: string;
    open: boolean;
    handleClose: () => void;
};
declare const FormModal: React.FC<FormModalProps>;
export default FormModal;
