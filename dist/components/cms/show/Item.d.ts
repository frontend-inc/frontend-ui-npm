import React from 'react';
import { ActionType, DocumentType } from '../../../types';
type ItemProps = {
    resource: DocumentType;
    actions?: ActionType[];
};
declare const Item: React.FC<ItemProps>;
export default Item;
