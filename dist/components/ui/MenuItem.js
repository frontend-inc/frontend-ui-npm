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
var MenuItem = function (props) {
    var handleClick = props.handleClick, _a = props.active, active = _a === void 0 ? false : _a, _b = props.depth, depth = _b === void 0 ? 0 : _b, open = props.open, _c = props.expandable, expandable = _c === void 0 ? false : _c, label = props.label, icon = props.icon;
    var paddingLeft = 18;
    if (depth > 0) {
        paddingLeft = 42 + 8 * depth;
    }
    var style = {
        paddingLeft: paddingLeft,
    };
    return (react_1.default.createElement(material_1.ListItem, { sx: sx.itemLeaf, disableGutters: true },
        react_1.default.createElement(material_1.Button, { onClick: handleClick, sx: __assign(__assign({}, sx.button), (active && sx.active)), style: style, startIcon: icon && icon }, label)));
};
exports.default = MenuItem;
var sx = {
    item: {
        display: "block",
    },
    itemLeaf: {
        display: "flex",
        pt: 0,
        pb: 0,
        borderRadius: function (theme) { return theme.shape.borderRadius; },
        ml: "4px",
        mr: "4px",
    },
    button: {
        width: "100%",
        minWidth: 40,
        borderRadius: function (theme) { return theme.shape.borderRadius; },
        p: "12px 8px",
        justifyContent: "flex-start",
        labelTransform: "uppercase",
        letterSpacing: 0,
        mr: "10px",
    },
    icon: {
        height: 20,
        width: 20,
        color: "text.primary",
        display: "flex",
        alignItems: "center",
        mt: 0,
        mr: 1,
        mb: 0,
        ml: 1,
        m: { sm: 0 },
    },
    expandIcon: {
        ml: "auto",
        height: 20,
        width: 20,
    },
    label: {
        color: "text.primary",
        display: "flex",
        alignItems: "center",
        ml: "auto",
    },
    active: {
        color: "primary.contrastText",
        bgcolor: "primary.main",
        boxShadow: "0 0 0 1px rgb(35 38 59 / 5%), 0 1px 3px 0 rgb(35 38 59 / 15%)",
        "&:hover": {
            color: "primary.contrastText",
            bgcolor: "primary.main",
        },
    },
};
