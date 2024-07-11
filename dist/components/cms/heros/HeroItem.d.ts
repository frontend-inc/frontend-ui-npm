import React from 'react';
import { ActionType, FormFieldType, DisplayFieldType } from '../../../types';
export type HeroProps = {
    handle?: string;
    actions: ActionType[];
    displayFields: DisplayFieldType[];
    fieldName?: string;
    url?: string;
    resource: any;
    enableEdit?: boolean;
    enableCreate?: boolean;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    enableRatings?: boolean;
    enablePayments?: boolean;
    enableUsers?: boolean;
    enableOverlay?: boolean;
    handleEdit?: (res: any) => void;
};
type HeroStyleTypes = 'card' | 'cover' | 'list' | 'avatar' | 'youtube' | 'vimeo';
export type HeroItemProps = HeroProps & {
    fieldName: string;
    fields?: FormFieldType[];
    url: string;
    style: HeroStyleTypes;
};
declare const HeroItem: React.FC<HeroItemProps>;
export default HeroItem;
