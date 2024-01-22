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
var context_1 = require("../../../context");
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var helpers_1 = require("../../../helpers");
var navigation_1 = require("next/navigation");
var index_1 = require("../../../constants/index");
var CoverHoriz = function (props) {
  var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
  var _a = props || {},
    label = _a.label,
    icon = _a.icon,
    title = _a.title,
    _b = _a.image,
    image = _b === void 0 ? "" : _b,
    href = _a.href,
    handleClick = _a.handleClick,
    buttonText = _a.buttonText,
    _c = _a.textVariant,
    textVariant = _c === void 0 ? "subtitle1" : _c,
    _d = _a.objectFit,
    objectFit = _d === void 0 ? "cover" : _d,
    _e = _a.height,
    height = _e === void 0 ? index_1.COVER_HORIZ_HEIGHT : _e,
    _f = _a.width,
    width = _f === void 0 ? index_1.COVER_HORIZ_WIDTH : _f,
    _g = _a.enableGradient,
    enableGradient = _g === void 0 ? false : _g,
    _h = _a.enableOverlay,
    enableOverlay = _h === void 0 ? false : _h;
  var router = (0, navigation_1.useRouter)();
  var handleItemClick = function () {
    if (handleClick) {
      handleClick();
    } else if (href) {
      router.push("".concat(clientUrl).concat(href));
    }
  };
  return react_1.default.createElement(
    material_1.Stack,
    { sx: sx.root, spacing: 1 },
    react_1.default.createElement(
      components_1.TouchableOpacity,
      { handleClick: handleItemClick },
      react_1.default.createElement(components_1.Image, {
        src: image,
        objectFit: objectFit,
        alt: title,
        height: height,
        enableGradient: enableGradient,
        enableOverlay: enableOverlay,
      })
    ),
    react_1.default.createElement(
      material_1.Stack,
      { spacing: 1, sx: sx.cover },
      react_1.default.createElement(
        material_1.Stack,
        { spacing: 1, direction: "row", alignItems: "center" },
        icon &&
          react_1.default.createElement(
            material_1.Box,
            null,
            react_1.default.createElement(components_1.Icon, {
              size: 20,
              name: icon,
              color: "common.white",
            })
          ),
        react_1.default.createElement(
          material_1.Box,
          { sx: sx.content },
          react_1.default.createElement(
            material_1.Typography,
            { color: "common.white", variant: textVariant },
            (0, helpers_1.truncate)(title, 40)
          ),
          label &&
            react_1.default.createElement(
              material_1.Typography,
              { color: "common.white", variant: "caption" },
              label
            )
        )
      ),
      buttonText &&
        react_1.default.createElement(
          material_1.Box,
          null,
          react_1.default.createElement(
            material_1.Button,
            { variant: "contained", sx: sx.button, onClick: handleItemClick },
            buttonText
          )
        )
    )
  );
};
exports.default = CoverHoriz;
var sx = {
  root: {
    width: "100%",
    position: "relative",
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: function (theme) {
      return "".concat(theme.shape.borderRadius, "px");
    },
  },
  cover: {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    zIndex: 1,
  },
  button: {
    bgcolor: "common.white",
    color: "common.black",
    "&:hover": {
      color: "common.black",
      bgcolor: "common.white",
      opacity: 0.9,
    },
  },
  content: {
    height: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
};
