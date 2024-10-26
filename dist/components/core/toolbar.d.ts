import React from 'react';
interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
    disableGutters?: boolean;
    variant?: 'regular' | 'dense';
}
declare const Toolbar: React.FC<ToolbarProps>;
export { Toolbar };
