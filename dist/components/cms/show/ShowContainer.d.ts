import React from 'react';
import { ShowItemProps } from './Show';
type ShowContainerProps = ShowItemProps & {
    children: React.ReactNode;
};
declare const ShowContainer: React.FC<ShowContainerProps>;
export default ShowContainer;
