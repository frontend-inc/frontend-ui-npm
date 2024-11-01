import React from 'react';
import { SyntheticEventType } from 'frontend-js';
type AdminDocumentRightPanelProps = {
    appId: string | number;
    loading: boolean;
    publishLoading: boolean;
    errors?: any;
    title: string | null;
    document?: any;
    setDocument: (document: any) => void;
    handleChange: (e: SyntheticEventType) => void;
    handleSubmit: () => void;
    handleTogglePublish: () => void;
    enableUsers?: boolean;
    enableStripe?: boolean;
    enablePlaces?: boolean;
};
declare const AdminDocumentRightPanel: React.FC<AdminDocumentRightPanelProps>;
export default AdminDocumentRightPanel;
