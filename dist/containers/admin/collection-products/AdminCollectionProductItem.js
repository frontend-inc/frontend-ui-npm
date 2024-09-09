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
var AdminProductItem = function (props) {
    var _a;
    var resource = props.resource, selectable = props.selectable, selected = props.selected, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, handleSelect = props.handleSelect, rest = __rest(props, ["resource", "selectable", "selected", "handleClick", "handleEdit", "handleDelete", "handleSelect"]);
    var product = resource === null || resource === void 0 ? void 0 : resource.product;
    return (react_1.default.createElement(components_1.ResourceListItem, __assign({ selectable: selectable, selected: selected, image: (_a = product === null || product === void 0 ? void 0 : product.image) === null || _a === void 0 ? void 0 : _a.url, primary: product === null || product === void 0 ? void 0 : product.title, secondary: react_1.default.createElement(components_1.DisplayFields, { resource: product, fields: [
                { label: 'Price', name: 'price', variant: 'price' },
            ] }), secondaryAction: react_1.default.createElement(components_1.PublishLabel, { published: product === null || product === void 0 ? void 0 : product.published }), handleEdit: handleEdit, handleDelete: handleDelete, handleClick: handleClick, handleSelect: handleSelect }, rest)));
};
exports.default = AdminProductItem;
