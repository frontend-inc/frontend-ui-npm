import React from 'react';
type DropZoneProps = {
    onDrop: (file: File, preview: any) => void;
    label?: string;
    dropLabel?: string;
};
declare const DropZone: React.FC<DropZoneProps>;
export default DropZone;
