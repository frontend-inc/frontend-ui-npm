import React from 'react';
import { CardProps } from '../../../types';
type KanBanCardProps = CardProps & {
    id: string;
    loading?: boolean;
    ref?: any;
    attributes?: any;
    listeners?: any;
    enableDragging?: boolean;
    handleComment: () => void;
};
declare const KanBanCard: React.FC<KanBanCardProps>;
export default KanBanCard;
