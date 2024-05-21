import React from 'react';
type MyAccountModalProps = {
    enableTeams?: boolean;
    enableStripe?: boolean;
    stripePublishableKey: string;
};
declare const MyAccountModal: React.FC<MyAccountModalProps>;
export default MyAccountModal;
