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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var image_1 = __importDefault(require("next/image"));
var webstudio_shopify_1 = require("webstudio-shopify");
var ColorVariantsOptions = function (props) {
  var product = props.product,
    name = props.name,
    values = props.values,
    selected = props.selected,
    handleChange = props.handleChange;
  return react_1.default.createElement(
    material_1.Box,
    { sx: sx.root },
    react_1.default.createElement(
      material_1.Box,
      { sx: sx.options },
      values === null || values === void 0
        ? void 0
        : values.map(function (value) {
            var _a, _b;
            var variant = (0, webstudio_shopify_1.findVariantByColor)(
              product,
              value
            );
            return react_1.default.createElement(
              material_1.Button,
              {
                sx: __assign(
                  __assign({}, sx.button),
                  selected === value && sx.activeButton
                ),
                onClick: function () {
                  return handleChange(name, value);
                },
              },
              react_1.default.createElement(image_1.default, {
                height: 64,
                width: 64,
                src:
                  (_a =
                    variant === null || variant === void 0
                      ? void 0
                      : variant.image) === null || _a === void 0
                    ? void 0
                    : _a.url,
                alt:
                  (_b =
                    variant === null || variant === void 0
                      ? void 0
                      : variant.image) === null || _b === void 0
                    ? void 0
                    : _b.altText,
                style: {
                  objectFit: "contain",
                },
              })
            );
          })
    )
  );
};
exports.default = ColorVariantsOptions;
var sx = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  options: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "10px",
  },
  button: {
    border: "2px solid transparent",
    "&:hover": {
      bgcolor: "transparent",
      opacity: 0.85,
    },
  },
  activeButton: {
    opacity: 1,
    border: "2px solid",
    borderColor: "primary.main",
  },
};
