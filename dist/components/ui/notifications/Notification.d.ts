import React from 'react';
type NotificationProps = {
    text: string;
    buttonText?: string;
    path?: string;
    discountCode?: string;
    copyToClipboard?: boolean;
};
declare const Notification: React.FC<NotificationProps>;
export default Notification;
