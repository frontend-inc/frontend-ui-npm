import React from 'react';
import { FilterOptionType, SyntheticEventType } from '../../../../types';
type FilternameProps = {
    index: number;
    filter: FilterOptionType;
    fieldOptions: {
        label: string;
        value: string;
    }[];
    handleChange: (e: SyntheticEventType, index: number) => void;
    handleRemove: (index: number) => void;
};
declare const FilternameWrapper: React.FC<FilternameProps>;
export default FilternameWrapper;
