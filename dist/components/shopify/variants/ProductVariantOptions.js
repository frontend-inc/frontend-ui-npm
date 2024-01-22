"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var OptionButton_1 = __importDefault(require("./OptionButton"));
var ProductVariantOptions = function (props) {
  var name = props.name,
    values = props.values,
    selected = props.selected,
    handleChange = props.handleChange;
  return react_1.default.createElement(
    material_1.Box,
    { sx: sx.root },
    react_1.default.createElement(
      material_1.Typography,
      { sx: sx.title, variant: "subtitle2", color: "text.primary" },
      "Select ",
      name
    ),
    react_1.default.createElement(
      material_1.Box,
      { sx: sx.options },
      values === null || values === void 0
        ? void 0
        : values.map(function (value) {
            return react_1.default.createElement(
              OptionButton_1.default,
              {
                key: value,
                value: value,
                name: name,
                active: selected === value,
                handleClick: handleChange,
              },
              value
            );
          })
    )
  );
};
exports.default = ProductVariantOptions;
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
  title: {
    mb: 1,
  },
};
