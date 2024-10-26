import React from 'react';
export type AuthGuardProps = {
    children: React.ReactNode;
    roles?: string[];
    requireAuth?: boolean;
    requireTeam?: boolean;
    requirePaid?: boolean;
};
declare const AuthGuard: React.FC<AuthGuardProps>;
export default AuthGuard;
