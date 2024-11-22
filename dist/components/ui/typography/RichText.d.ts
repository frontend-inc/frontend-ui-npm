import React from 'react';
import { SyntheticEventType } from '../../../types';
export type RichTextProps = {
    html: string;
    editable?: boolean;
    handleChange: (event: SyntheticEventType) => void;
};
declare const RichText: React.FC<RichTextProps>;
export default RichText;
