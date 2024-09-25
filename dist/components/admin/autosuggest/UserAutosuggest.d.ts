import React from 'react';
import { SyntheticEventType } from '../../../types';
type UserAutosuggestProps = {
    errors?: any;
    name: string;
    label: string;
    value: any;
    placeholder?: string;
    direction?: 'row' | 'column';
    displayField?: string;
    valueParam?: string;
    handleChange: (ev: SyntheticEventType) => void;
};
declare const UserAutosuggest: React.FC<UserAutosuggestProps>;
export default UserAutosuggest;
