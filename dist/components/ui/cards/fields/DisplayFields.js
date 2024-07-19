"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../../components");
var material_1 = require("@mui/material");
var DisplayFields = function (props) {
    var _a = props || {}, fields = _a.fields, resource = _a.resource, _b = _a.alignItems, alignItems = _b === void 0 ? 'flex-start' : _b;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, direction: 'column', spacing: 0.5, alignItems: alignItems }, fields === null || fields === void 0 ? void 0 : fields.map(function (field, index) { return (react_1.default.createElement(components_1.DisplayField, { key: index, field: field, resource: resource, alignItems: alignItems })); })));
};
exports.default = DisplayFields;
var sx = {
    root: {
        width: '100%',
    },
};
