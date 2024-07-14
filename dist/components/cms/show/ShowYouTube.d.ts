import React from 'react';
import { ShowProps } from './ShowItem';
export type ShowYouTubeProps = ShowProps & {
    fieldName: string;
};
declare const ShowYouTube: React.FC<ShowYouTubeProps>;
export default ShowYouTube;
