import React from "react";
import { SyntheticEvent } from "../../../types";
type EditableTypographyProps = {
    variant: any;
    name: string;
    handleChange: (e: SyntheticEvent) => void;
    children: string;
    text: string;
};
declare const EditableTypography: React.FC<EditableTypographyProps>;
export default EditableTypography;
