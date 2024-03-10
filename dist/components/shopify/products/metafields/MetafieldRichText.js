"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var RichText = function (props) {
    var value = props.value;
    if (typeof value === 'string') {
        value = JSON.parse(value);
    }
    var rendervalue = function (value, inList) {
        var _a;
        if (inList === void 0) { inList = false; }
        if (!value)
            return null;
        if (value.type === 'root' && ((_a = value.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return (react_1.default.createElement("div", null, value.children.map(function (child, index) { return rendervalue(child, inList); })));
        }
        else if (Array.isArray(value)) {
            return value.map(function (el, index) { return renderElement(el, index, inList); });
        }
        else {
            return renderElement(value, undefined, inList);
        }
    };
    var renderElement = function (el, key, inList) {
        switch (el.type) {
            case 'paragraph':
                return (react_1.default.createElement(material_1.Typography, { my: 1, key: key, variant: "body1" }, rendervalue(el.children, inList)));
            case 'heading':
                return (
                // @ts-ignore
                react_1.default.createElement(material_1.Typography, { key: key, variant: "h".concat(el.level) }, rendervalue(el.children, inList)));
            case 'list':
                return (react_1.default.createElement(material_1.List, { key: key, component: el.listType === 'ordered' ? 'ol' : 'ul' }, rendervalue(el.children, true)));
            case 'list-item':
                return react_1.default.createElement(material_1.ListItem, { key: key }, rendervalue(el.children, true));
            case 'link':
                return (react_1.default.createElement(material_1.Link, { key: key, href: el.url, title: el.title, target: el.target }, rendervalue(el.children, inList)));
            case 'text':
                return renderText(el, key, inList);
            default:
                return null;
        }
    };
    var renderText = function (el, key, inList) {
        var textElement = (react_1.default.createElement("span", { key: key },
            el.bold ? react_1.default.createElement("strong", null, el.value) : null,
            el.italic ? react_1.default.createElement("em", null, el.value) : null,
            !el.bold && !el.italic ? el.value : null));
        if (inList) {
            textElement = react_1.default.createElement(material_1.ListItemText, { key: key, primary: textElement });
        }
        return textElement;
    };
    return react_1.default.createElement(react_1.default.Fragment, null, rendervalue(value));
};
exports.default = RichText;
