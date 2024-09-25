"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var ResourceDetails = function (props) {
    var _a = props || {}, avatar = _a.avatar, resource = _a.resource, primary = _a.primary, secondary = _a.secondary, label = _a.label, image = _a.image, _b = _a.fields, fields = _b === void 0 ? [] : _b, _c = _a.direction, direction = _c === void 0 ? 'column' : _c;
    return (react_1.default.createElement(material_1.Stack, { direction: "column", sx: sx.content, spacing: 1 },
        image && (react_1.default.createElement(material_1.Box, { sx: sx.image },
            react_1.default.createElement(components_1.Image, { height: 220, src: image, label: label }))),
        avatar && avatar,
        react_1.default.createElement(material_1.Typography, { variant: "h5", color: 'text.primary' }, primary),
        secondary && (react_1.default.createElement(material_1.Typography, { variant: "body2", color: 'text.secondary' }, secondary)), fields === null || fields === void 0 ? void 0 :
        fields.map(function (field, index) { return (react_1.default.createElement(components_1.Field, { enableBorder: true, key: index, 
            //@ts-ignore
            field: field, resource: resource, direction: direction })); })));
};
exports.default = ResourceDetails;
var sx = {
    content: {
        width: '100%',
    },
    image: {
        width: '100%',
    },
};
