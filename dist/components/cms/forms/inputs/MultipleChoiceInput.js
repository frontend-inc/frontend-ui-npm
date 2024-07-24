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
var material_1 = require("@mui/material");
var components_1 = require("../../../../components");
var SelectableCardItem_1 = __importDefault(require("./SelectableCardItem"));
var MultipleChoiceInput = function (props) {
    var label = props.label, _a = props.layout, layout = _a === void 0 ? 'list' : _a, _b = props.direction, direction = _b === void 0 ? 'column' : _b, name = props.name, value = props.value, options = props.options, handleChange = props.handleChange, _c = props.multiSelect, multiSelect = _c === void 0 ? true : _c;
    var _d = (0, react_1.useState)(value || []), selected = _d[0], setSelected = _d[1];
    var handleSelect = function (item) {
        if (Array.isArray(selected) && selected.find(function (i) { return i === item; })) {
            setSelected(selected.filter(function (i) { return i != item; }));
        }
        else {
            if (multiSelect) {
                setSelected(selected.concat(item));
            }
            else {
                setSelected([item]);
            }
        }
    };
    (0, react_1.useEffect)(function () {
        if (Array.isArray(selected)) {
            handleChange({
                target: {
                    name: name,
                    value: selected || [],
                },
            });
        }
    }, [selected]);
    return (react_1.default.createElement(material_1.Stack, { sx: sx.stack, direction: direction, spacing: 1 },
        react_1.default.createElement(material_1.Typography, { variant: "caption", sx: sx.label, gutterBottom: true }, label),
        layout === 'list' && (react_1.default.createElement(material_1.List, { disablePadding: true, sx: sx.list }, options === null || options === void 0 ? void 0 : options.map(function (option, idx) { return (react_1.default.createElement(components_1.SelectableListItem, { key: idx, title: option.label, icon: option.icon, selected: Array.isArray(selected) && selected.find(function (i) { return i === option.value; }), handleClick: function () { return handleSelect(option === null || option === void 0 ? void 0 : option.value); } })); }))),
        layout == 'grid' && (react_1.default.createElement(material_1.Box, { sx: sx.grid }, options === null || options === void 0 ? void 0 : options.map(function (option, idx) { return (react_1.default.createElement(material_1.Box, { sx: sx.item, key: idx },
            react_1.default.createElement(SelectableCardItem_1.default, { title: option.label, image: option.image, description: option.description, selected: Array.isArray(selected) && selected.find(function (i) { return i === option.value; }), handleClick: function () { return handleSelect(option === null || option === void 0 ? void 0 : option.value); } }))); })))));
};
exports.default = MultipleChoiceInput;
var sx = {
    list: {
        width: '100%',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
    },
    item: {
        width: '100%',
        gridColumn: 'span 1',
    },
    label: {
        mb: 0,
        minWidth: '100px',
        color: 'text.secondary',
    },
    stack: {
        width: '100%',
        alignItems: 'flex-start',
    },
    stackVertical: {
        alignItems: 'center',
    },
};
