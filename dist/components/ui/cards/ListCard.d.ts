import React from 'react';
import { CardProps } from './Card';
export type ListCardProps = CardProps & {
    sortable?: boolean;
};
declare const ListCard: React.FC<ListCardProps>;
export default ListCard;
