import React from 'react';
type CommentListItemProps = {
    url: string;
    handle: string;
    comment: any;
    reply?: boolean;
    user?: any;
    level?: number;
    enableReply?: boolean;
    handleDelete?: (comment: any) => void;
};
declare const CommentListItem: React.FC<CommentListItemProps>;
export default CommentListItem;
