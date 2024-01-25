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
var hooks_1 = require("../../../hooks");
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var helpers_1 = require("../../../helpers");
var Details = function (props) {
    var fields = props.fields, url = props.url, handle = props.handle;
    var _a = (0, react_1.useState)(), document = _a[0], setDocument = _a[1];
    var _b = (0, hooks_1.useResource)({
        url: url,
    }), resource = _b.resource, findOne = _b.findOne;
    (0, react_1.useEffect)(function () {
        if (handle) {
            findOne(handle);
        }
    }, [handle]);
    (0, react_1.useEffect)(function () {
        if (resource) {
            setDocument((0, helpers_1.flattenDocument)(resource));
        }
    }, [resource]);
    return (react_1.default.createElement(material_1.Box, { sx: sx.root }, document &&
        fields.map(function (field, i) { return (react_1.default.createElement(components_1.Field, { key: i, field: field, document: document })); })));
};
exports.default = Details;
var sx = {
    root: {
        width: '100%',
    },
};
