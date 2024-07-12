import React from 'react';
import { RemoteFormProps } from './RemoteForm';
export type RemoteFormModalProps = RemoteFormProps & {
    title?: string;
    open: boolean;
    handleClose: () => void;
};
declare const RemoteFormModal: React.FC<RemoteFormModalProps>;
export default RemoteFormModal;
