"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var CollectionList = function (props) {
    var resources = props.resources, handleClick = props.handleClick, _a = props.layout, layout = _a === void 0 ? 'grid' : _a, _b = props.style, style = _b === void 0 ? 'card' : _b, buttonText = props.buttonText, _c = props.enableBorder, enableBorder = _c === void 0 ? false : _c, _d = props.enableGradient, enableGradient = _d === void 0 ? false : _d;
    return (react_1.default.createElement(material_1.Stack, { spacing: 2 },
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (layout == 'grid' ? sx.grid : sx.list)) }, resources === null || resources === void 0 ? void 0 : resources.map(function (resource, index) {
            var _a, _b;
            return (react_1.default.createElement(__1.CollectionCard, { key: index, layout: layout, style: style, label: resource === null || resource === void 0 ? void 0 : resource.label, title: resource === null || resource === void 0 ? void 0 : resource.title, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, video: (_b = resource === null || resource === void 0 ? void 0 : resource.video) === null || _b === void 0 ? void 0 : _b.url, description: resource === null || resource === void 0 ? void 0 : resource.description, buttonText: buttonText, handleClick: function () { return handleClick(resource); }, enableBorder: enableBorder, enableGradient: enableGradient }));
        }))));
};
exports.default = CollectionList;
var sx = {
    root: {
        width: '100%',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: {
            md: '1fr 1fr 1fr',
            xs: '1fr',
        },
        gap: '24px',
    },
};
