import React from 'react';
import { InputPropsType } from '../../../types';
type SnakeCaseInputPropsType = InputPropsType & {
    joinChar?: string;
};
declare const SnakeCaseInput: React.FC<SnakeCaseInputPropsType>;
export default SnakeCaseInput;
