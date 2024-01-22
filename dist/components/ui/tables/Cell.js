"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var Cell = function (props) {
  var field = props.field,
    row = props.row,
    value = props.value,
    handleClick = props.handleClick;
  return react_1.default.createElement(
    material_1.Box,
    { sx: sx.root },
    field.variant === "boolean" &&
      (field === null || field === void 0 ? void 0 : field.name) !=
        "published" &&
      react_1.default.createElement(components_1.CellBoolean, { value: value }),
    field.variant === "boolean" &&
      (field === null || field === void 0 ? void 0 : field.name) ==
        "published" &&
      react_1.default.createElement(components_1.CellPublished, {
        value: value,
      }),
    field.variant === "date" &&
      react_1.default.createElement(components_1.CellDate, { value: value }),
    field.variant === "datetime" &&
      react_1.default.createElement(components_1.CellDate, { value: value }),
    field.variant === "image" &&
      react_1.default.createElement(components_1.CellImage, {
        value: value,
        handleClick: handleClick,
      }),
    field.variant === "video" &&
      react_1.default.createElement(components_1.CellVideo, {
        value: value,
        //@ts-ignore
        handleClick: handleClick,
      }),
    field.variant === "json" &&
      react_1.default.createElement(components_1.CellJSON, { value: value }),
    field.variant === "url" &&
      react_1.default.createElement(components_1.CellLink, {
        value: value,
        //@ts-ignore
        handleClick: handleClick,
      }),
    field.variant === "rating" &&
      react_1.default.createElement(components_1.CellRating, { value: value }),
    field.variant === "text" &&
      react_1.default.createElement(components_1.CellText, { value: value }),
    field.variant === "price" &&
      react_1.default.createElement(components_1.CellPrice, { value: value }),
    field.variant === "shopify_product" &&
      react_1.default.createElement(components_1.CellText, { value: value }),
    field.variant === "shopify_collection" &&
      react_1.default.createElement(components_1.CellText, { value: value }),
    value &&
      field.variant === "habtm" &&
      react_1.default.createElement(components_1.CellHABTM, {
        value: value,
        row: row,
        field: field,
        handleClick: handleClick,
      }),
    !field.array
      ? react_1.default.createElement(
          react_1.default.Fragment,
          null,
          field.variant === "string" &&
            (field === null || field === void 0 ? void 0 : field.name) !==
              "locale" &&
            react_1.default.createElement(components_1.CellString, {
              value: value,
            }),
          field.variant === "string" &&
            (field === null || field === void 0 ? void 0 : field.name) ==
              "locale" &&
            react_1.default.createElement(components_1.CellLabel, {
              value: value,
            }),
          field.variant === "select" &&
            react_1.default.createElement(components_1.CellEnum, {
              value: value,
            })
        )
      : react_1.default.createElement(components_1.CellArray, { value: value })
  );
};
exports.default = Cell;
var sx = {
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  default: {
    fontWeight: 500,
    fontFamily: "Roboto",
  },
};
