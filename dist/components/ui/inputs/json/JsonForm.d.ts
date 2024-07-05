import React from 'react';
type JsonFormProps = {
    index: number;
    item: any;
    handleChange: any;
    fields: any;
    direction?: 'column' | 'row';
    handleRemove?: () => void;
};
declare const JsonForm: React.FC<JsonFormProps>;
export default JsonForm;
