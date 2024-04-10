import React from 'react';
import { InputPropsType } from '../../../types';
type NoSpaceInputPropsType = InputPropsType & {
    joinChar?: string;
};
declare const NoSpaceInput: React.FC<NoSpaceInputPropsType>;
export default NoSpaceInput;
