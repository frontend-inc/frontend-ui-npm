import React from 'react';
type AdminFormQuestionToolbarProps = {
    open: boolean;
    resource: any;
    url: string;
    handleClose: () => void;
    selectedIds: string[];
    handleReload: () => void;
};
declare const AdminFormQuestionToolbar: React.FC<AdminFormQuestionToolbarProps>;
export default AdminFormQuestionToolbar;
