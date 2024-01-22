import React from "react";
type FetchManyProps = {
  url: string;
  children: any;
  defaultQuery: Record<string, any>;
};
declare const FetchMany: React.FC<FetchManyProps>;
export default FetchMany;
