"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var Feature_1 = __importDefault(require("./Feature"));
var components_1 = require("../../../components");
var Features = function (props) {
    var _a = (props || {}).items, items = _a === void 0 ? [] : _a;
    return (react_1.default.createElement(components_1.Container, { maxWidth: "md" },
        react_1.default.createElement(material_1.Box, { sx: sx.grid }, items === null || items === void 0 ? void 0 : items.map(function (item, i) { return (react_1.default.createElement(material_1.Box, { sx: sx.item },
            react_1.default.createElement(Feature_1.default, { icon: item === null || item === void 0 ? void 0 : item.icon, title: item === null || item === void 0 ? void 0 : item.title, description: item === null || item === void 0 ? void 0 : item.description }))); })),
        (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(components_1.Placeholder, { icon: "Zap", title: "No features", description: "No features to display." }))));
};
exports.default = Features;
var sx = {
    title: {
        width: '100%',
        textAlign: 'center',
    },
    item: {
        p: 2,
        maxWidth: 280
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: {
            md: '1fr 1fr 1fr',
            sm: '1fr 1fr',
            xs: '1fr',
        },
        gap: 2,
    }
};
