import React from 'react';
import { SyntheticEventType } from '../../../types';
type TeamAutosuggestProps = {
    errors?: any;
    name: string;
    label: string;
    value: any;
    direction?: 'row' | 'column';
    displayField?: string;
    handleChange: (ev: SyntheticEventType) => void;
};
declare const TeamAutosuggest: React.FC<TeamAutosuggestProps>;
export default TeamAutosuggest;
