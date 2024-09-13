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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var AdminOrderLineItem = function (props) {
    var _a, _b, _c, _d;
    var orderLineItem = props.resource, selectable = props.selectable, selected = props.selected, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, handleSelect = props.handleSelect, rest = __rest(props, ["resource", "selectable", "selected", "handleClick", "handleEdit", "handleDelete", "handleSelect"]);
    return (react_1.default.createElement(components_1.ResourceListItem, __assign({ selectable: selectable, selected: selected, image: (_a = orderLineItem === null || orderLineItem === void 0 ? void 0 : orderLineItem.product_data) === null || _a === void 0 ? void 0 : _a.image_url, avatar: react_1.default.createElement(material_1.Badge, { badgeContent: 2, color: "secondary" },
            react_1.default.createElement(material_1.Box, { sx: sx.image },
                react_1.default.createElement(components_1.Image, { alt: ((_b = orderLineItem === null || orderLineItem === void 0 ? void 0 : orderLineItem.product_data) === null || _b === void 0 ? void 0 : _b.title) || '', src: (_c = orderLineItem === null || orderLineItem === void 0 ? void 0 : orderLineItem.product_data) === null || _c === void 0 ? void 0 : _c.image_url, height: 64, width: 64 }))), primary: (_d = orderLineItem.product_data) === null || _d === void 0 ? void 0 : _d.title, secondary: react_1.default.createElement(components_1.DisplayFields, { resource: orderLineItem, fields: [
                { label: 'Price', name: 'product_data.price', variant: 'price' },
            ] }), secondaryAction: react_1.default.createElement(components_1.Label, { label: orderLineItem === null || orderLineItem === void 0 ? void 0 : orderLineItem.status }), handleEdit: handleEdit, handleClick: handleClick, handleSelect: handleSelect }, rest)));
};
exports.default = AdminOrderLineItem;
var sx = {
    image: {
        height: 64,
        width: 64,
    }
};
