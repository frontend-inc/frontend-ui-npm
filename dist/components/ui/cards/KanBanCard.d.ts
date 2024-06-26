import React from 'react';
import { CardProps } from '../../../types';
type KanBanCardProps = CardProps & {
    id: string;
    ref?: any;
    attributes?: any;
    listeners?: any;
    enableDragging?: boolean;
};
declare const KanBanCard: React.FC<KanBanCardProps>;
export default KanBanCard;
