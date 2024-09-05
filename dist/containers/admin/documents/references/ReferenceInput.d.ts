import React from 'react';
type ReferenceInputProps = {
    field: any;
    document: any;
    collection: any;
    handleAddReferences: (resources: any[]) => void;
    handleRemoveReferences: (resources: any[]) => void;
    enableMultipleSelect?: boolean;
};
declare const ReferenceInput: React.FC<ReferenceInputProps>;
export default ReferenceInput;
