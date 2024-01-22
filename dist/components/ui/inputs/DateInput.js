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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var moment_1 = __importDefault(require("moment"));
var styles_1 = require("./styles");
var DateInput = function (props) {
  var errors = props.errors,
    required = props.required,
    label = props.label,
    name = props.name,
    value = props.value,
    handleChange = props.handleChange,
    placeholder = props.placeholder;
  var _a = (0, react_1.useState)(false),
    error = _a[0],
    setError = _a[1];
  var handleInputChange = function (ev) {
    var value = ev.target.value;
    required && value === "" ? setError(true) : setError(false);
    handleChange(ev);
  };
  var selectedDate = (0, moment_1.default)(value).format("yyyy-MM-DD");
  return react_1.default.createElement(
    material_1.FormControl,
    { fullWidth: true },
    react_1.default.createElement(
      material_1.Typography,
      { variant: "caption", color: "textSecondary" },
      label
    ),
    react_1.default.createElement(material_1.InputBase, {
      error: error,
      autoComplete: "off",
      fullWidth: true,
      type: "date",
      name: name,
      sx: styles_1.sx.inputBase,
      placeholder: placeholder,
      margin: "dense",
      onChange: handleInputChange,
      value: selectedDate,
    })
  );
};
exports.default = DateInput;
