import React from "react";
type LogosProps = {
  title?: string;
  url: string;
  layout: "grid" | "carousel";
  editing?: boolean;
  perPage?: number;
  query?: any;
  buttonText?: string;
  autoPlay?: boolean;
  arrows?: boolean;
  showDots?: boolean;
  enableBorder?: boolean;
  enableGradient?: boolean;
};
declare const Logos: React.FC<LogosProps>;
export default Logos;
