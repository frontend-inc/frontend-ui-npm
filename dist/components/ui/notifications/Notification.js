"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var hooks_1 = require("hooks");
var context_1 = require("context");
var router_1 = require("next/router");
var Notification = function (props) {
    var router = (0, router_1.useRouter)();
    var text = props.text, _a = props.buttonText, buttonText = _a === void 0 ? 'View details' : _a, path = props.path, discountCode = props.discountCode, copyToClipboard = props.copyToClipboard;
    var showAlertSuccess = (0, hooks_1.useAlerts)().showAlertSuccess;
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var handleClick = function () {
        if (copyToClipboard) {
            (0, copy_to_clipboard_1.default)(discountCode);
            showAlertSuccess("Discount code copied to clipboard");
        }
        else if (path) {
            router.push("".concat(clientUrl, "/").concat(path));
        }
    };
    return (react_1.default.createElement(material_1.ListItem, { sx: sx.root },
        react_1.default.createElement(material_1.ListItemButton, { disableRipple: true, sx: sx.listItemButton, onClick: handleClick },
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body2", sx: sx.text }, text) }))));
};
exports.default = Notification;
var sx = {
    root: {
        p: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'primary.main',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    text: {
        textAlign: 'center',
    },
    listItemButton: {}
};
