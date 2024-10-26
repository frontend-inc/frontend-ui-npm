import React from 'react';
type AuthModalProps = {
    disableUsername?: boolean;
    enableGoogle?: boolean;
    handleSuccess?: () => void;
};
declare const AuthModal: React.FC<AuthModalProps>;
export default AuthModal;
