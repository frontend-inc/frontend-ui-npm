"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var Feature_1 = __importDefault(require("./Feature"));
var Features = function (props) {
    var _a = props || {}, title = _a.title, features = _a.features;
    return (react_1.default.createElement(material_1.Grid, { container: true, spacing: 0 },
        title && (react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h6", sx: sx.title }, title)),
        features.map(function (feature, i) { return (react_1.default.createElement(material_1.Grid, { item: true, xs: 12, sm: 4, md: 4, key: i },
            react_1.default.createElement(material_1.Box, { sx: sx.item },
                react_1.default.createElement(Feature_1.default, { icon: feature === null || feature === void 0 ? void 0 : feature.icon, title: feature === null || feature === void 0 ? void 0 : feature.title, description: feature === null || feature === void 0 ? void 0 : feature.description })))); })));
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
