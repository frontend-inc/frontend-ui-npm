import React from 'react';
export type DataListProps = {
    query: any;
    url: string;
    name: string;
    header: React.ReactNode;
    list: React.ReactNode;
    show: React.ReactNode;
    edit: React.ReactNode;
    destroy: React.ReactNode;
};
declare const DataListBase: React.FC<DataListProps>;
export default DataListBase;
