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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var hooks_1 = require("../../../hooks");
var context_1 = require("../../../context");
var ContextLoader = function (props) {
    var loading = (0, react_1.useContext)(context_1.AppContext).loading;
    var easeLoading = (0, hooks_1.useDelayedLoading)({
        loading: loading,
    }).loading;
    return (react_1.default.createElement(material_1.Backdrop, { open: easeLoading, sx: sx.backdrop },
        react_1.default.createElement(material_1.LinearProgress, { color: "primary", sx: sx.progress })));
};
exports.default = ContextLoader;
var sx = {
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        zIndex: function (theme) { return theme.zIndex.modal + 1; },
    },
    progress: {
        height: '4px',
        width: '100vw',
        bgcolor: 'transparent',
        color: 'primary.dark',
        borderRadius: '4px',
    },
};
