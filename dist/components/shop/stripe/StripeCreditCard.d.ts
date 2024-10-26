import React from 'react';
type StripeCreditCardProps = {
    publishableKey: string;
    handleSubmit: (stripeToken: string, last4: string) => void;
    handleCancel: () => void;
};
declare const StripeCreditCard: React.FC<StripeCreditCardProps>;
export default StripeCreditCard;
