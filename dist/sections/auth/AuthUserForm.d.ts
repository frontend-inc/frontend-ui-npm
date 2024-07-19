import React from 'react';
import { UserFormProps } from '../../components/auth/users/UserForm';
import { SectionProps, HeadingProps } from '../../types';
type AuthUserFormProps = SectionProps & HeadingProps & UserFormProps;
declare const AuthUserForm: React.FC<AuthUserFormProps>;
export default AuthUserForm;
