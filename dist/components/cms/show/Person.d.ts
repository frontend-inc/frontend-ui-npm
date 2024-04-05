import React from 'react';
import { ActionType } from '../../../types';
type PersonProps = {
    actions?: ActionType[];
    resource: any;
};
declare const Person: React.FC<PersonProps>;
export default Person;
