import React from "react";
type FetchProps = {
  url: string;
  handle: string | string[];
  children: any;
};
declare const Fetch: React.FC<FetchProps>;
export default Fetch;
