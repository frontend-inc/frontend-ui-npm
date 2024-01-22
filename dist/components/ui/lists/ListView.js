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
var components_1 = require("../../../components");
var ListView = function (props) {
  var items = props.items,
    editing = props.editing,
    handleClick = props.handleClick,
    buttonText = props.buttonText,
    _a = props.flexDirection,
    flexDirection = _a === void 0 ? "column" : _a,
    _b = props.component,
    Component = _b === void 0 ? components_1.CardHoriz : _b,
    _c = props.enableBorder,
    enableBorder = _c === void 0 ? false : _c,
    _d = props.enableGradient,
    enableGradient = _d === void 0 ? false : _d,
    _e = props.enableOverlay,
    enableOverlay = _e === void 0 ? false : _e,
    _f = props.spacing,
    spacing = _f === void 0 ? 1 : _f,
    _g = props.justifyContent,
    justifyContent = _g === void 0 ? "flex-start" : _g;
  return react_1.default.createElement(
    material_1.Stack,
    {
      sx: __assign(
        __assign(__assign({}, sx.root), flexDirection === "row" && sx.row),
        {
          justifyContent: {
            sm: justifyContent,
            xs: "flex-start",
          },
        }
      ),
      direction: flexDirection,
      spacing: spacing,
    },
    items === null || items === void 0
      ? void 0
      : items.map(function (item, index) {
          var _a, _b;
          return react_1.default.createElement(Component, {
            key: index,
            title: item === null || item === void 0 ? void 0 : item.title,
            image:
              (_a = item === null || item === void 0 ? void 0 : item.image) ===
                null || _a === void 0
                ? void 0
                : _a.url,
            video:
              (_b = item === null || item === void 0 ? void 0 : item.video) ===
                null || _b === void 0
                ? void 0
                : _b.url,
            description:
              item === null || item === void 0 ? void 0 : item.description,
            editing: editing,
            buttonText: buttonText,
            handleClick: function () {
              return handleClick(item);
            },
            enableBorder: enableBorder,
            enableGradient: enableGradient,
            enableOverlay: enableOverlay,
          });
        })
  );
};
exports.default = ListView;
var sx = {
  root: {
    width: "100%",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  row: {
    px: 2,
    overflowX: "scroll",
    overflowY: "hidden",
    alignItems: "center",
    justifyContent: {
      sm: "center",
      xs: "flex-start",
    },
  },
};
