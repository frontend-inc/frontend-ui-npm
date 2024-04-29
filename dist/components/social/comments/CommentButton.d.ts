import React from 'react';
type CommentButtonProps = {
    reply?: boolean;
    handleClick: () => void;
};
declare const CommentButton: React.FC<CommentButtonProps>;
export default CommentButton;
