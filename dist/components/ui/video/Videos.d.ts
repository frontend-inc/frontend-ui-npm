import React from "react";
type VideosProps = {
  title?: string;
  url: string;
  layout: "list" | "grid" | "carousel";
  style: "cover" | "story";
  editing?: boolean;
  perPage?: number;
  query?: any;
  buttonText?: string;
  enableBorder?: boolean;
  enableGradient?: boolean;
  enableOverlay?: boolean;
};
declare const Videos: React.FC<VideosProps>;
export default Videos;
