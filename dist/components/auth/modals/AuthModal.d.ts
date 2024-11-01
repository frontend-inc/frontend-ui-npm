import React from 'react';
type AuthModalProps = {
    enableGoogle?: boolean;
    handleSuccess?: () => void;
};
declare const AuthModal: React.FC<AuthModalProps>;
export default AuthModal;
