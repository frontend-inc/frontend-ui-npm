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
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var MobileFilterDrawer = function (props) {
    var children = (props || {}).children;
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var handleClick = function () { return setOpen(true); };
    var handleClose = function () { return setOpen(false); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Hidden, { smUp: true },
            react_1.default.createElement(material_1.Button, { onClick: handleClick, variant: "outlined", startIcon: react_1.default.createElement(lucide_react_1.ListFilter, null) }, "Filters")),
        react_1.default.createElement(components_1.Drawer, { open: open, handleClose: handleClose, title: 'Filters', anchor: "right" },
            react_1.default.createElement(material_1.Stack, { spacing: 2 }, children))));
};
exports.default = MobileFilterDrawer;
