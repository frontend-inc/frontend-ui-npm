import React from 'react';
export type ListContainerProps = {
    url: string;
    name: string;
    query?: any;
    children: React.ReactNode;
};
declare const ListContainer: React.FC<ListContainerProps>;
export default ListContainer;
