import React from 'react';
import { CurrentUserFormProps } from '../../components/auth/users/CurrentUserForm';
import { SectionProps, HeadingProps } from '../../types';
type AuthUserFormProps = SectionProps & HeadingProps & CurrentUserFormProps;
declare const AuthUserForm: React.FC<AuthUserFormProps>;
export default AuthUserForm;
