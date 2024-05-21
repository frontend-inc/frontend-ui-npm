import React from 'react';
type StripeCreditCardElementProps = {
    handleSubmit: (stripeToken: string, last4: string) => void;
    handleCancel: () => void;
};
declare const StripeCreditCardElement: React.FC<StripeCreditCardElementProps>;
export default StripeCreditCardElement;
