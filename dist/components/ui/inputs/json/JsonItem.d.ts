import React from 'react';
type JsonItemProps = {
    index: number;
    item: any;
    titleField: string;
    handleClick: any;
    handleRemove: any;
};
declare const JsonItem: React.FC<JsonItemProps>;
export default JsonItem;
