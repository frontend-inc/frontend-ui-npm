import React from 'react';
type PublishButtonProps = {
    loading: boolean;
    document: any;
    handleTogglePublish: () => void;
    fullWidth?: boolean;
};
declare const PublishButton: React.FC<PublishButtonProps>;
export default PublishButton;
