import React from 'react';
type AlertButtonProps = {
    disable?: boolean;
    iconButton?: boolean;
    onClick: () => void;
};
declare const AlertButton: React.FC<AlertButtonProps>;
export default AlertButton;
