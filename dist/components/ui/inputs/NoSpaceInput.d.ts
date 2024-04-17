import React from 'react';
import { InputPropsType } from '../../../types';
type NoSpaceInputPropsType = InputPropsType & {
    joinChar?: string;
    disableLowerCase?: boolean;
};
declare const NoSpaceInput: React.FC<NoSpaceInputPropsType>;
export default NoSpaceInput;
