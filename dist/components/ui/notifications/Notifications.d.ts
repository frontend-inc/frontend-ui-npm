import React from "react";
import { Notification as NotificationType } from "../../../types";
type NotificationProps = {
    notifications: NotificationType[];
};
declare const Notifications: React.FC<NotificationProps>;
export default Notifications;
