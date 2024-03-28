"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var Feature_1 = __importDefault(require("./Feature"));
var __1 = require("../..");
var Features = function (props) {
    var _a = props || {}, title = _a.title, _b = _a.items, items = _b === void 0 ? [] : _b;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Grid, { container: true, spacing: 0 },
            title && (react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h5", sx: sx.title }, title)), items === null || items === void 0 ? void 0 :
            items.map(function (item, i) { return (react_1.default.createElement(material_1.Grid, { item: true, xs: 12, sm: 4, md: 4, key: i },
                react_1.default.createElement(material_1.Box, { sx: sx.item },
                    react_1.default.createElement(Feature_1.default, { icon: item === null || item === void 0 ? void 0 : item.icon, title: item === null || item === void 0 ? void 0 : item.title, description: item === null || item === void 0 ? void 0 : item.description })))); })),
        (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(__1.Placeholder, { icon: "Zap", title: "No features", description: "Your features will appear here." }))));
};
exports.default = Features;
var sx = {
    title: {
        width: '100%',
        textAlign: 'center',
    },
    item: {
        p: 2,
    },
};
