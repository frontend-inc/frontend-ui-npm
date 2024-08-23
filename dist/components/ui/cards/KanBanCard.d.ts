import React from 'react';
import { CardProps } from './Card';
type KanBanCardProps = CardProps & {
    loading?: boolean;
    id: string;
    enableDragging?: boolean;
};
declare const KanBanCard: React.FC<KanBanCardProps>;
export default KanBanCard;
