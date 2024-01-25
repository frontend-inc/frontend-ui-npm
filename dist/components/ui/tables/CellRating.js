"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Rating_1 = __importDefault(require("@mui/material/Rating"));
var icons_material_1 = require("@mui/icons-material");
var CellRating = function (props) {
    var _a = props.value, value = _a === void 0 ? 0 : _a;
    return (react_1.default.createElement(Rating_1.default, { readOnly: true, value: value, icon: react_1.default.createElement(icons_material_1.Star, { sx: sx.rating }), emptyIcon: react_1.default.createElement(icons_material_1.StarBorderOutlined, { sx: sx.emptyRating }) }));
};
exports.default = CellRating;
var sx = {
    rating: {
        color: 'primary.main',
    },
    emptyRating: {
        color: 'text.secondary',
    },
};
