import React from 'react';
type SocialActionsProps = {
    resource: any;
    enableLikes?: boolean;
    enableFavorites?: boolean;
    enableComments?: boolean;
    color?: string;
};
declare const SocialActions: React.FC<SocialActionsProps>;
export default SocialActions;
