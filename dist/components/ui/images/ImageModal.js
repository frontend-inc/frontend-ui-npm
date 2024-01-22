"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var image_1 = __importDefault(require("next/image"));
var ImageModal = function (props) {
  var open = props.open,
    image = props.image,
    _a = props.title,
    title = _a === void 0 ? "" : _a,
    handleClose = props.handleClose;
  var showAlertSuccess = (0, hooks_1.useAlerts)().showAlertSuccess;
  var handleCopyUrlClick = function () {
    (0, copy_to_clipboard_1.default)(
      image === null || image === void 0 ? void 0 : image.url
    );
    showAlertSuccess("Asset URL copied to clipboard");
  };
  var handleDownloadClick = function () {
    window.open(
      image === null || image === void 0 ? void 0 : image.url,
      "_blank"
    );
  };
  return react_1.default.createElement(
    components_1.Modal,
    {
      open: open,
      handleClose: handleClose,
      title: title,
      maxWidth: "md",
      p: 0,
      actions: react_1.default.createElement(
        react_1.default.Fragment,
        null,
        react_1.default.createElement(
          material_1.Button,
          { onClick: handleCopyUrlClick },
          "Copy URL"
        ),
        react_1.default.createElement(
          material_1.Button,
          { variant: "contained", onClick: handleDownloadClick },
          "Download"
        )
      ),
    },
    react_1.default.createElement(
      material_1.Box,
      { sx: sx.root },
      react_1.default.createElement(image_1.default, {
        alt: "Image",
        src: image === null || image === void 0 ? void 0 : image.url,
        height:
          (image === null || image === void 0 ? void 0 : image.height) || 500,
        width:
          (image === null || image === void 0 ? void 0 : image.width) || 500,
        style: {
          width: "100%",
          objectFit: "contain",
        },
      })
    )
  );
};
exports.default = ImageModal;
var sx = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
