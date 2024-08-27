import React from 'react';
import { CardProps } from '../../../types';
export type KanBanCardProps = CardProps & {
    id: string;
    loading?: boolean;
    ref?: any;
    attributes?: any;
    listeners?: any;
    enableDragging?: boolean;
};
declare const CollectionKanBanCard: React.FC<KanBanCardProps>;
export default CollectionKanBanCard;
