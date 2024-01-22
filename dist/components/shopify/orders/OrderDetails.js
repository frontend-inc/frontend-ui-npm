"use strict";
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
var material_1 = require("@mui/material");
var shopify_1 = require("../../../components/shopify");
var webstudio_shopify_1 = require("webstudio-shopify");
var lucide_react_1 = require("lucide-react");
var navigation_1 = require("next/navigation");
var OrderDetails = function (props) {
  var _a, _b;
  var router = (0, navigation_1.useRouter)();
  var order = props.order,
    supportUrl = props.supportUrl;
  var _c = (0, react_1.useState)(),
    lineItems = _c[0],
    setListItems = _c[1];
  var handleOrderStatusClick = function () {
    window.open(
      order === null || order === void 0 ? void 0 : order.statusUrl,
      "_blank"
    );
  };
  var handleSupportClick = function () {
    router.push(supportUrl);
  };
  (0, react_1.useEffect)(
    function () {
      var _a;
      if (order) {
        //@ts-ignore
        setListItems(
          (_a =
            order === null || order === void 0 ? void 0 : order.lineItems) ===
            null || _a === void 0
            ? void 0
            : _a.edges.map(function (e) {
                return e.node;
              })
        );
      }
    },
    [order]
  );
  var shippingAddress = (order || {}).shippingAddress;
  return react_1.default.createElement(
    material_1.Stack,
    { spacing: 1 },
    react_1.default.createElement(
      material_1.Typography,
      { gutterBottom: true, variant: "body1" },
      "Order details"
    ),
    react_1.default.createElement(
      material_1.List,
      null,
      lineItems === null || lineItems === void 0
        ? void 0
        : lineItems.map(function (lineItem, i) {
            return react_1.default.createElement(shopify_1.OrderLineItem, {
              key: i,
              lineItem: lineItem,
            });
          })
    ),
    react_1.default.createElement(
      material_1.Box,
      { sx: sx.lineItem },
      react_1.default.createElement(
        material_1.Typography,
        { variant: "body1" },
        "Shipping"
      ),
      react_1.default.createElement(
        material_1.Typography,
        { variant: "body1" },
        (0, webstudio_shopify_1.formatCurrency)(
          (_a =
            order === null || order === void 0
              ? void 0
              : order.totalShippingPrice) === null || _a === void 0
            ? void 0
            : _a.amount,
          2
        )
      )
    ),
    react_1.default.createElement(
      material_1.Box,
      { sx: sx.lineItem },
      react_1.default.createElement(
        material_1.Typography,
        { variant: "body1" },
        "Total"
      ),
      react_1.default.createElement(
        material_1.Typography,
        { variant: "body1" },
        (0, webstudio_shopify_1.formatCurrency)(
          (_b =
            order === null || order === void 0 ? void 0 : order.totalPrice) ===
            null || _b === void 0
            ? void 0
            : _b.amount,
          2
        )
      )
    ),
    shippingAddress &&
      react_1.default.createElement(
        react_1.default.Fragment,
        null,
        react_1.default.createElement(
          material_1.Typography,
          { gutterBottom: true, variant: "body1" },
          "Shipping Details"
        ),
        react_1.default.createElement(
          material_1.List,
          null,
          react_1.default.createElement(shopify_1.AddressItem, {
            disableActions: true,
            //@ts-ignore
            address: shippingAddress,
          })
        )
      ),
    react_1.default.createElement(
      material_1.Button,
      {
        fullWidth: true,
        variant: "contained",
        endIcon: react_1.default.createElement(
          lucide_react_1.ExternalLink,
          null
        ),
        onClick: handleOrderStatusClick,
      },
      "Order status"
    ),
    supportUrl &&
      react_1.default.createElement(
        material_1.Button,
        { fullWidth: true, variant: "outlined", onClick: handleSupportClick },
        "Customer support"
      )
  );
};
exports.default = OrderDetails;
var sx = {
  root: {},
  lineItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shippingDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
};
