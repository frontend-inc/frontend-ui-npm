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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var Autocomplete_1 = __importDefault(require("@mui/material/Autocomplete"));
var MultiAutosuggest = function (props) {
  var value = props.value,
    options = props.options,
    label = props.label,
    name = props.name,
    _a = props.placeholder,
    placeholder = _a === void 0 ? "Select" : _a,
    handleChange = props.handleChange;
  var _b = (0, react_1.useState)([]),
    defaultValue = _b[0],
    setDefaultValue = _b[1];
  var handleOnChange = function (event, newValue) {
    handleChange({
      target: {
        name: name,
        value: newValue.map(function (v) {
          return v.value;
        }),
      },
    });
  };
  var setInitialValues = function () {
    var initialValues = [];
    initialValues = options.filter(function (o) {
      return value.includes(o.value);
    });
    setDefaultValue(initialValues);
  };
  (0, react_1.useEffect)(
    function () {
      if (value) setInitialValues();
    },
    [value]
  );
  return react_1.default.createElement(
    material_1.Box,
    null,
    react_1.default.createElement(
      material_1.Typography,
      { variant: "caption", color: "textSecondary", sx: sx.label },
      label
    ),
    defaultValue &&
      react_1.default.createElement(Autocomplete_1.default, {
        multiple: true,
        defaultValue: defaultValue,
        onChange: handleOnChange,
        options: options,
        getOptionLabel: function (option) {
          return option.label;
        },
        renderTags: function (tagValue, getTagProps) {
          return tagValue.map(function (option, index) {
            return react_1.default.createElement(
              material_1.Chip,
              __assign({ label: option.label }, getTagProps({ index: index }))
            );
          });
        },
        renderInput: function (params) {
          return react_1.default.createElement(
            material_1.TextField,
            __assign({}, params, {
              variant: "outlined",
              placeholder: placeholder,
            })
          );
        },
      })
  );
};
exports.default = MultiAutosuggest;
var sx = {
  root: {},
  inputRoot: {
    p: "5px 5px !important",
  },
  label: {
    mb: 0,
  },
};
