import React from 'react';
import { OrderType } from '../../../types';
type AdminOrderDetailsProps = {
    loading?: boolean;
    order: OrderType;
    handleEdit: () => void;
};
declare const AdminOrderDetails: React.FC<AdminOrderDetailsProps>;
export default AdminOrderDetails;
