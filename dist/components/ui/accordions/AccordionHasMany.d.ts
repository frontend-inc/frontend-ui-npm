import React from "react";
type AccordionHasManyProps = {
  field: any;
  url: string;
  handle: string;
  foreignUrl: string;
  perPage?: number;
  query?: any;
};
declare const AccordionHasMany: React.FC<AccordionHasManyProps>;
export default AccordionHasMany;
