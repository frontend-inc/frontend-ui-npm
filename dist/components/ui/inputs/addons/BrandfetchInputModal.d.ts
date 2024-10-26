import React from 'react';
type BrandfetchInputProps = {
    label?: string;
    name: string;
    value: string;
    direction?: 'row' | 'column';
    handleChange: (e: any) => void;
};
declare const BrandfetchInputModal: React.FC<BrandfetchInputProps>;
export default BrandfetchInputModal;
