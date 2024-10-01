"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var Logos = function (props) {
    var title = props.title, _a = props.logos, logos = _a === void 0 ? [] : _a;
    return (react_1.default.createElement(material_1.Stack, { spacing: 0, sx: sx.root },
        react_1.default.createElement(__1.BrandLogos, { logos: logos, width: 128, height: 48 }),
        (logos === null || logos === void 0 ? void 0 : logos.length) === 0 && (react_1.default.createElement(__1.Placeholder, { icon: "Image", title: "No logos", description: "Logos will appear here" }))));
};
exports.default = Logos;
var sx = {
    root: {
        width: '100%',
        py: 1,
        bgcolor: 'background.main',
    },
    title: {
        width: '100%',
        textAlign: 'center',
        mb: 4,
    },
};
