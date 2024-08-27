"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var DataReferenceForm = function (props) {
    var _a = props || {}, errors = _a.errors, url = _a.url, resource = _a.resource, handleChange = _a.handleChange, query = _a.query;
    return (react_1.default.createElement(material_1.Stack, { py: 2, spacing: 2 },
        react_1.default.createElement(components_1.RemoteAutosuggest, { errors: errors, name: "id", label: "Select", value: resource === null || resource === void 0 ? void 0 : resource.id, displayField: "title", direction: "column", url: url, placeholder: "Select", handleChange: handleChange, defaultQuery: query })));
};
exports.default = DataReferenceForm;
