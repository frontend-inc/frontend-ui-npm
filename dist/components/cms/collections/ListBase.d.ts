import React from 'react';
export type ListProps = {
    query: any;
    url: string;
    name: string;
    header: React.ReactNode;
    list: React.ReactNode;
    show: React.ReactNode;
    edit: React.ReactNode;
    destroy: React.ReactNode;
};
declare const ListBase: React.FC<ListProps>;
export default ListBase;
