import React from "react";
type ProductModalProps = {
  handle: string;
  enableQuantity?: boolean;
  open?: boolean;
  buttonText?: string;
  handleClose?: () => void;
};
declare const ProductModal: React.FC<ProductModalProps>;
export default ProductModal;
