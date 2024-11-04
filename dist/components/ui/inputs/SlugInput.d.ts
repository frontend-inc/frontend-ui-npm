import React from 'react';
import { InputPropsType } from '../../../types';
type SlugInputPropsType = InputPropsType & {
    joinChar?: string;
};
declare const SlugInput: React.FC<SlugInputPropsType>;
export default SlugInput;
