import React from 'react';
import { DocumentFormRemoteProps } from './DocumentFormRemote';
export type DocumentFormRemoteModalProps = DocumentFormRemoteProps & {
    title?: string;
    open: boolean;
    handleClose: () => void;
};
declare const DocumentFormRemoteModal: React.FC<DocumentFormRemoteModalProps>;
export default DocumentFormRemoteModal;
