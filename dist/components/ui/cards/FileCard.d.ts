import React from 'react';
import { CardProps } from './Card';
export type FileCardProps = CardProps & {
    icon: string;
};
declare const FileCard: React.FC<FileCardProps>;
export default FileCard;
