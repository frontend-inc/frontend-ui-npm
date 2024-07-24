"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var material_1 = require("@mui/material");
var SocialFields = function (props) {
    var _a = props || {}, resource = _a.resource, fields = _a.fields;
    return (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 0 }, fields === null || fields === void 0 ? void 0 : fields.map(function (field, i) { return (react_1.default.createElement(__1.SocialField, { key: i, field: field, resource: resource })); })));
};
exports.default = SocialFields;
