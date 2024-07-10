import React from 'react';
import { SyntheticEventType } from '../../../types';
type GeoSearchInputProps = {
    name?: string;
    label?: string;
    value: string;
    handleChange: (e: SyntheticEventType) => void;
    location: string;
    handleLocationChange: (e: SyntheticEventType) => void;
    placeholder?: string;
    fullWidth?: boolean;
    handleSearch: (keywords: string, location: string) => void;
    styles?: any;
};
declare const GeoSearchInput: React.FC<GeoSearchInputProps>;
export default GeoSearchInput;
