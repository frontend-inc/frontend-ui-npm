import React from "react";
type TextProps = {
    text: string;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | undefined;
    color?: string;
    textAlign?: "left" | "center" | "right" | "justify" | undefined;
};
declare const Text: React.FC<TextProps>;
export default Text;
