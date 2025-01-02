import React from 'react';
import { ButtonProps } from '@nextui-org/react';
type AlertButtonProps = ButtonProps & {
    onPress: () => void;
};
declare const AlertButton: React.ForwardRefExoticComponent<Omit<AlertButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export { AlertButton };
