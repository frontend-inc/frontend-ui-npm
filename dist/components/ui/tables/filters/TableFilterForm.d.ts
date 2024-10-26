import React from 'react';
type TableFilterFormProps = {
    loading: boolean;
    query: any;
    fields: any[];
    handleChange: (e: any) => void;
    handleSearch: (e: any) => void;
    handleClearFilters: () => void;
};
export default function TableFilterForm({ loading, query, fields, handleChange, handleSearch, handleClearFilters, }: TableFilterFormProps): React.JSX.Element;
export {};
