"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var PriceRangeInput = function (props) {
  var _a = props || {},
    value = _a.value,
    handleChange = _a.handleChange,
    minPrice = _a.minPrice,
    maxPrice = _a.maxPrice;
  var onChange = function (ev, newValue) {
    handleChange(newValue);
  };
  var handleMinPriceChange = function (ev) {
    var minPrice = ev.target.value;
    handleChange([minPrice, value[1]]);
  };
  var handleMaxPriceChange = function (ev) {
    var maxPrice = ev.target.value;
    handleChange([value[0], maxPrice]);
  };
  return react_1.default.createElement(
    material_1.Box,
    { sx: sx.slider },
    react_1.default.createElement(material_1.Slider, {
      "aria-label": "Price range",
      defaultValue: [minPrice, maxPrice],
      valueLabelDisplay: "auto",
      onChange: onChange,
      step: 10,
      min: minPrice,
      max: maxPrice,
      value: value,
    }),
    value &&
      react_1.default.createElement(
        material_1.Box,
        { sx: sx.priceInputs },
        react_1.default.createElement(
          material_1.FormControl,
          { variant: "standard" },
          react_1.default.createElement(material_1.Input, {
            onChange: handleMinPriceChange,
            value: value[0],
            startAdornment: react_1.default.createElement(
              material_1.InputAdornment,
              { position: "start" },
              react_1.default.createElement(
                material_1.Typography,
                { color: "textPrimary", variant: "body2" },
                "$"
              )
            ),
          })
        ),
        react_1.default.createElement(
          material_1.Box,
          { sx: sx.to },
          react_1.default.createElement(
            material_1.Typography,
            { variant: "body2" },
            "to"
          )
        ),
        react_1.default.createElement(
          material_1.FormControl,
          { variant: "standard" },
          react_1.default.createElement(material_1.Input, {
            value: value[1],
            onChange: handleMaxPriceChange,
            startAdornment: react_1.default.createElement(
              material_1.InputAdornment,
              { sx: sx.inputAdornment, position: "start" },
              react_1.default.createElement(
                material_1.Typography,
                { color: "textPrimary", variant: "body2" },
                "$"
              )
            ),
          })
        )
      )
  );
};
exports.default = PriceRangeInput;
var sx = {
  slider: {
    px: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "144px",
    width: {
      xs: "250px",
      sm: "342px",
    },
  },
  priceInputs: {
    mt: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  inputAdornment: {
    color: "text.primary",
  },
  to: {
    mx: 2,
  },
};
