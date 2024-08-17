import React from 'react';
type TokenItemProps = {
    resource: any;
    handleEdit: (token: any) => void;
    handleDelete: (token: any) => void;
};
declare const TokenItem: React.FC<TokenItemProps>;
export default TokenItem;
