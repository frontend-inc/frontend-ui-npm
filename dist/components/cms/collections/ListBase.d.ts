import React from 'react';
export type ListProps = {
    query: any;
    url: string;
    name: string;
    loadMore?: boolean;
    header: React.ReactNode;
    list: React.ReactNode;
    show: React.ReactNode;
    edit: React.ReactNode;
    destroy: React.ReactNode;
};
declare const List: React.FC<ListProps>;
export default List;
