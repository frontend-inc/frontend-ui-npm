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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var AdminFieldVariantItem_1 = __importDefault(require("./AdminFieldVariantItem"));
var constants_1 = require("../../../constants");
var helpers_1 = require("../../../helpers");
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var components_2 = require("../../../components");
var AdminFieldVariantList = function (props) {
    var field = props.field, handleClick = props.handleClick;
    var _a = (0, react_1.useState)(constants_1.FIELD_VARIANTS), visibleFields = _a[0], setVisibleFields = _a[1];
    var _b = (0, react_1.useState)((0, helpers_1.groupBy)(constants_1.FIELD_VARIANTS, 'category')), groupedFields = _b[0], setGroupedFields = _b[1];
    var _c = (0, react_1.useState)(''), text = _c[0], setText = _c[1];
    var handleChange = function (ev) {
        var value = ev.target.value;
        setText(value);
        setVisibleFields(constants_1.FIELD_VARIANTS.filter(function (f) {
            return f.label.toLowerCase().includes(value.toLowerCase());
        }));
    };
    (0, react_1.useEffect)(function () {
        setGroupedFields((0, helpers_1.groupBy)(visibleFields, 'category'));
    }, [visibleFields]);
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(material_1.Box, { pb: 2, px: 2 },
            react_1.default.createElement(components_1.SearchInput, { value: text, placeholder: "Search fields", handleChange: handleChange, handleSearch: function () { return null; } })),
        (field === null || field === void 0 ? void 0 : field.id) ? (react_1.default.createElement(material_1.Box, { px: 2 },
            react_1.default.createElement(AdminFieldVariantItem_1.default, { field: constants_1.FIELD_VARIANTS === null || constants_1.FIELD_VARIANTS === void 0 ? void 0 : constants_1.FIELD_VARIANTS.find(function (f) { return f.variant == field.variant; }), handleClick: function () { return null; } }))) : (groupedFields &&
            Object.keys(groupedFields).map(function (key, i) { return (react_1.default.createElement(components_2.MenuList, { enableBorder: true, key: i, label: key }, groupedFields[key].map(function (fieldVariant, i) { return (react_1.default.createElement(AdminFieldVariantItem_1.default, { field: fieldVariant, handleClick: function () { return handleClick(fieldVariant); } })); }))); }))));
};
exports.default = AdminFieldVariantList;
