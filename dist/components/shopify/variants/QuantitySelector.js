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
var lucide_react_1 = require("lucide-react");
var QuantitySelector = function (props) {
    var _a = props || {}, size = _a.size, quantity = _a.quantity, handleAddQuantity = _a.handleAddQuantity, handleRemoveQuantity = _a.handleRemoveQuantity;
    return (react_1.default.createElement(material_1.ButtonGroup, { sx: __assign(__assign({}, sx.buttonGroup), (size == 'small' && sx.buttonGroupSmall)) },
        react_1.default.createElement(material_1.Button, { sx: sx.button, onClick: handleRemoveQuantity },
            react_1.default.createElement(lucide_react_1.Minus, { size: size == 'large' ? 24 : 16 })),
        react_1.default.createElement(material_1.Button, { sx: sx.button }, quantity),
        react_1.default.createElement(material_1.Button, { sx: sx.button, onClick: handleAddQuantity },
            react_1.default.createElement(lucide_react_1.Plus, { size: size == 'large' ? 24 : 16 }))));
};
exports.default = QuantitySelector;
var sx = {
    buttonGroup: {
        bgcolor: 'tertiary.main',
    },
    buttonGroupSmall: {
        height: '40px',
        '& .MuiButton-root': {
            minWidth: '30px',
        },
    },
    button: {
        px: 0,
        width: '100%',
        color: 'text.primary',
        border: 'none',
        '&:hover': {
            border: 'none',
        },
    },
};
