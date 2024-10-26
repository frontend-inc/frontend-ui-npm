import React from 'react';
interface AdminProductToolbarProps {
    productCollectionId?: number;
    handleSuccess: () => void;
    handleClose: () => void;
    selectedIds?: number[];
}
export default function AdminProductToolbar({ productCollectionId, handleSuccess, handleClose, selectedIds, }: AdminProductToolbarProps): React.JSX.Element;
export {};
