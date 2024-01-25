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
var FilterInput_1 = __importDefault(require("./FilterInput"));
var FilterListItem_1 = __importDefault(require("./FilterListItem"));
var FilterList = function (props) {
    var label = props.label, name = props.name, _a = props.where, where = _a === void 0 ? 'AND' : _a, _b = props.operator, operator = _b === void 0 ? 'in' : _b, options = props.options, values = props.values, handleClick = props.handleClick, enableBorder = props.enableBorder, _c = props.disablePadding, disablePadding = _c === void 0 ? false : _c, _d = props.closed, closed = _d === void 0 ? false : _d;
    var _e = (0, react_1.useState)(!closed), open = _e[0], setOpen = _e[1];
    var handleToggleClick = function () {
        setOpen(!open);
    };
    return (react_1.default.createElement(FilterInput_1.default, { label: label, enableBorder: enableBorder, disablePadding: disablePadding, closed: closed }, options === null || options === void 0 ? void 0 : options.map(function (option, index) { return (react_1.default.createElement(FilterListItem_1.default, { key: index, values: values, option: option, handleClick: function () {
            return handleClick({
                where: where,
                operator: operator,
                field: name,
                value: option.value,
            });
        } })); })));
};
exports.default = FilterList;
var sx = {
    root: {
        width: '100%',
        minWidth: '280px',
    },
    padding: {
        px: 1,
    },
    listItem: {
        borderRadius: function (theme) { return theme.shape.borderRadius; },
        height: '40px',
    },
    listItemButton: {
        borderRadius: function (theme) { return theme.shape.borderRadius; },
        height: '40px',
    },
    listItemIcon: {
        minWidth: '40px',
        width: '40px',
    },
    label: {
        py: 0,
        color: 'text.secondary',
        lineHeight: '1em',
    },
    icon: {
        transition: 'transform 0.3s ease-in-out',
    },
    expandMore: {
        transform: 'rotate(90deg)',
    },
    borderTop: {
        borderTop: '1px solid',
        borderColor: 'divider',
    },
};
