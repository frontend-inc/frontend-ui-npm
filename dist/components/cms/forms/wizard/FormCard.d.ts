import React from 'react';
import { HeadingProps } from '../../../../types';
type FormCardProps = HeadingProps & {
    image?: string;
    buttonText: string;
    checkMark?: boolean;
    handleClick: () => void;
};
declare const FormCard: React.FC<FormCardProps>;
export default FormCard;
