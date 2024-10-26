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
    className?: string;
};
export default function GeoSearchInput({ name, fullWidth, value, location, placeholder, handleChange, handleLocationChange, handleSearch, className, }: GeoSearchInputProps): React.JSX.Element;
export {};
