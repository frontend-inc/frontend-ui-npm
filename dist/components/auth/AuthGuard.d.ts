import React from 'react';
export type AuthGuardProps = {
    children: React.ReactNode;
    requireAuth?: boolean;
    requireTeam?: boolean;
    requirePaid?: boolean;
    requireAdmin?: boolean;
};
declare const AuthGuard: React.FC<AuthGuardProps>;
export default AuthGuard;
