import React from 'react';
type SaveButtonProps = {
    loading: boolean;
    document: any;
    handleSubmit: () => void;
    fullWidth?: boolean;
};
declare const SaveButton: React.FC<SaveButtonProps>;
export default SaveButton;
