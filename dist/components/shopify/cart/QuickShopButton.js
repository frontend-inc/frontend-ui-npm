"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var shopify_1 = require("../../../components/shopify");
var material_1 = require("@mui/material");
var QuickShop = function (props) {
  var _a = props || {},
    size = _a.size,
    product = _a.product,
    _b = _a.buttonVariant,
    buttonVariant = _b === void 0 ? "text" : _b,
    _c = _a.buttonText,
    buttonText = _c === void 0 ? "Add to Cart" : _c,
    _d = _a.quickShopButtonText,
    quickShopButtonText = _d === void 0 ? "Quick Shop" : _d,
    _e = _a.enableQuantity,
    enableQuantity = _e === void 0 ? false : _e;
  var _f = (0, react_1.useState)(false),
    open = _f[0],
    setOpen = _f[1];
  var handleQuickShop = function () {
    setOpen(true);
  };
  return react_1.default.createElement(
    react_1.default.Fragment,
    null,
    react_1.default.createElement(
      material_1.Button,
      {
        sx: __assign({}, buttonVariant == "text" && sx.buttonText),
        size: size,
        variant: buttonVariant,
        onClick: handleQuickShop,
      },
      quickShopButtonText
    ),
    react_1.default.createElement(shopify_1.ProductModal, {
      open: open,
      handleClose: function () {
        return setOpen(false);
      },
      handle: product === null || product === void 0 ? void 0 : product.handle,
      enableQuantity: enableQuantity,
      buttonText: buttonText,
    })
  );
};
exports.default = QuickShop;
var sx = {
  buttonText: {
    bgcolor: "tertiary.main",
  },
};
