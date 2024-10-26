import React from 'react';
type UseDragDropProps = {
    columns: any[];
    children?: any[];
};
declare const useDragDrop: (props: UseDragDropProps) => {
    columns: any[];
    setColumns: React.Dispatch<React.SetStateAction<any[]>>;
    reorder: (items: any, startIndex: any, endIndex: any) => any;
    reorderColumns: (items: any, startIndex: any, endIndex: any) => {
        event: string;
        columns: any;
    };
    reorderChildren: (columns: any, source: any, destination: any) => {
        event: string;
        columns: any;
        sorted: any;
        target?: undefined;
    } | {
        event: string;
        target: any;
        sorted: any;
        columns: any;
    };
};
export default useDragDrop;
