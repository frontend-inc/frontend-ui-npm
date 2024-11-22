import React from 'react';
import { ButtonType } from '../../../types';
import { HeadingProps } from '../../../types';
export type CallToActionProps = HeadingProps & {
    direction?: 'row' | 'column';
    buttons: ButtonType[];
};
declare const CallToAction: React.FC<CallToActionProps>;
export default CallToAction;
