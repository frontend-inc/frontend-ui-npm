import React from 'react';
interface ResourceToolbarModalProps {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
}
export default function ResourceToolbarModal(props: ResourceToolbarModalProps): React.JSX.Element;
export {};
