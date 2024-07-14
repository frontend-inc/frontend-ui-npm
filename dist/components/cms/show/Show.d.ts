import React from 'react';
import { ShowContainerProps } from './ShowContainer';
import { ShowItemProps } from './ShowItem';
export type ShowProps = ShowContainerProps & ShowItemProps;
declare const Show: React.FC<ShowProps>;
export default Show;
