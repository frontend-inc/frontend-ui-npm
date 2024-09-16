"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var material_1 = require("@mui/material");
var DisplayMetafields = function (props) {
    var _a = props || {}, fields = _a.fields, resource = _a.resource, _b = _a.alignItems, alignItems = _b === void 0 ? 'flex-start' : _b;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, direction: 'column', spacing: 0 }, fields === null || fields === void 0 ? void 0 : fields.map(function (field, index) { return (react_1.default.createElement(__1.DisplayMetafield, { key: index, field: field, resource: resource, disablePadding: true })); })));
};
exports.default = DisplayMetafields;
var sx = {
    root: {
        borderTop: '1px solid',
        borderColor: 'divider',
        width: '100%',
    },
};
