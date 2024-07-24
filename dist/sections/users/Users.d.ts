import React from 'react';
import { UserListProps } from '../../components/users/lists/UserList';
import { SectionProps, HeadingProps } from '../../types';
type UsersProps = SectionProps & HeadingProps & UserListProps;
declare const Users: React.FC<UsersProps>;
export default Users;
