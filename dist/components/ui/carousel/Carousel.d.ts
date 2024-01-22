import React from "react";
type CarouselProps = {
  children: React.ReactNode;
  autoPlay?: boolean;
  arrows?: boolean;
  showDots?: boolean;
  responsive?: any;
  styles?: any;
};
declare const ReactCarousel: React.FC<CarouselProps>;
export default ReactCarousel;
