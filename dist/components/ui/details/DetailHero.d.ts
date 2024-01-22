import React from "react";
import { TypographyVariant } from "@mui/material";
type DetailHeroProps = {
  fields: any[];
  url: string;
  handle: string;
  textVariant?: TypographyVariant;
  style?: "image" | "cover" | "avatar" | "card";
};
declare const DetailHero: React.FC<DetailHeroProps>;
export default DetailHero;
