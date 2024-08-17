import React from 'react';
type AdminProviderProps = {
    apiUrl: string;
    clientUrl: string;
    children: React.ReactNode;
};
declare const AdminProvider: React.FC<AdminProviderProps>;
export default AdminProvider;
