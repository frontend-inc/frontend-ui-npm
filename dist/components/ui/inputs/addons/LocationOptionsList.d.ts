import React from 'react';
import { OptionType } from 'frontend-js';
type LocationOptionsListProps = {
    open: boolean;
    options: OptionType[];
    handleClick: (option: OptionType) => void;
};
declare const LocationOptionsList: React.FC<LocationOptionsListProps>;
export default LocationOptionsList;
