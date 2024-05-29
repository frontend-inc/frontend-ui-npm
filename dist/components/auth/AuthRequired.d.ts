import React from 'react';
export type AuthRequiredProps = {
    children: React.ReactNode;
    requireAuth?: boolean;
    requireTeam?: boolean;
    requirePaid?: boolean;
    requireAdmin?: boolean;
};
declare const AuthRequired: React.FC<AuthRequiredProps>;
export default AuthRequired;
