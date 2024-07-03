import React from 'react';
type CommentReplyButtonProps = {
    reply?: boolean;
    handleClick: () => void;
};
declare const CommentReplyButton: React.FC<CommentReplyButtonProps>;
export default CommentReplyButton;
