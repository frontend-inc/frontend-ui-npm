import React from 'react';
type CommentProps = {
    url: string;
    handle: string;
    comment: any;
    reply?: boolean;
    user?: any;
    level?: number;
    enableReply?: boolean;
    handleDelete?: (comment: any) => void;
};
declare const Comment: React.FC<CommentProps>;
export default Comment;
