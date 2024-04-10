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
var Rating_1 = __importDefault(require("@mui/material/Rating"));
var icons_material_1 = require("@mui/icons-material");
var RatingInput = function (props) {
    var label = props.label, value = props.value, name = props.name, handleChange = props.handleChange, _a = props.disableBorder, disableBorder = _a === void 0 ? false : _a, _b = props.readOnly, readOnly = _b === void 0 ? false : _b, _c = props.direction, direction = _c === void 0 ? 'column' : _c, size = props.size;
    var onChange = function (event, value) {
        handleChange({
            target: {
                name: name,
                value: value,
            },
        });
    };
    return (react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.stack), (direction == 'row' && sx.stackVertical)), direction: direction, spacing: 1 },
        label && (react_1.default.createElement(material_1.Typography, { sx: sx.label, variant: "caption", color: "textSecondary" }, label)),
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.input), (!disableBorder && sx.border)) },
            react_1.default.createElement(Rating_1.default, { name: name, readOnly: readOnly, onChange: onChange, size: size, value: parseInt(value), icon: react_1.default.createElement(icons_material_1.Star, { sx: sx.rating }), emptyIcon: react_1.default.createElement(icons_material_1.StarBorderOutlined, { sx: sx.emptyRating }) }))));
};
exports.default = RatingInput;
var sx = {
    input: {
        width: '100%',
        fontSize: 15,
        '&:focus': {
            boxShadow: "".concat((0, material_1.alpha)('#999999', 0.25), " 0 0 0 0.2rem"),
            borderColor: 'primary.light',
        },
    },
    rating: {
        color: 'primary.main',
    },
    emptyRating: {
        color: 'text.secondary',
    },
    border: {
        p: 1,
        pb: 0.5,
        bgcolor: 'background.paper',
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: "rgb(0 0 0 / 5%) 0px 2px 4px !important",
    },
    label: {
        width: '100px',
        mb: 0,
    },
    stack: {
        width: '100%',
        alignItems: 'flex-start',
    },
    stackVertical: {
        alignItems: 'center',
    },
};
