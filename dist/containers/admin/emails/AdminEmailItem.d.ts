import React from 'react';
type EmailItemProps = {
    resource: any;
    handleEdit: (resource: any) => void;
    handleDelete: (resource: any) => void;
};
declare const EmailItem: React.FC<EmailItemProps>;
export default EmailItem;
