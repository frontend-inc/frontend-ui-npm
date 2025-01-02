import React from 'react';
type UserProps = {
    user: any;
    isBordered?: boolean;
    radius?: 'sm' | 'md' | 'lg' | 'full';
    size?: 'sm' | 'md' | 'lg';
    enableGradient?: boolean;
    className?: string;
};
declare const User: React.FC<UserProps>;
export default User;
