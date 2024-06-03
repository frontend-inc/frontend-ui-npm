import React from 'react';
import { ActionType, FormFieldType } from '../../../types';
export type HeroProps = {
    handle?: string;
    enableBorder?: boolean;
    actions: ActionType[];
    fields?: FormFieldType[];
    fieldName?: string;
    url?: string;
    resource: any;
    enableEdit?: boolean;
    enableCreate?: boolean;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    enableBuyNow?: boolean;
    enableStripePaymentLink?: boolean;
    handleEdit?: () => void;
};
type HeroStyleTypes = 'product' | 'article' | 'profile' | 'document' | 'youtube' | 'vimeo';
export type HeroItemProps = HeroProps & {
    fieldName: string;
    fields?: FormFieldType[];
    url: string;
    style: HeroStyleTypes;
};
declare const Hero: React.FC<HeroItemProps>;
export default Hero;
