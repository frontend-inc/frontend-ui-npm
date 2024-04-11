import React from 'react';
type FormCardProps = {
    title: string;
    description: string;
    image: string;
    buttonText: string;
    handleClick: () => void;
};
declare const FormCard: React.FC<FormCardProps>;
export default FormCard;
