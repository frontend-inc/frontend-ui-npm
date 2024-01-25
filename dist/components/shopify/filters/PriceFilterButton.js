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
var icons_material_1 = require("@mui/icons-material");
var PriceRangeInput_1 = __importDefault(require("./PriceRangeInput"));
var PriceFilterButton = function (props) {
    var _a = props || {}, value = _a.value, handleChange = _a.handleChange, label = _a.label, minPrice = _a.minPrice, maxPrice = _a.maxPrice;
    var _b = (0, react_1.useState)(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var open = Boolean(anchorEl);
    var handleButtonClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(material_1.Button, { id: "filter-button", "aria-controls": "filter-menu", "aria-haspopup": "true", "aria-expanded": open ? 'true' : undefined, onClick: handleButtonClick, endIcon: open ? react_1.default.createElement(icons_material_1.ExpandLess, null) : react_1.default.createElement(icons_material_1.ExpandMore, null) }, label),
        react_1.default.createElement(material_1.Popover, { id: "filter-menu", anchorEl: anchorEl, open: open, onClose: handleClose, anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
            } },
            react_1.default.createElement(PriceRangeInput_1.default, { handleChange: handleChange, minPrice: minPrice, maxPrice: maxPrice, value: value }))));
};
exports.default = PriceFilterButton;
var sx = {
    slider: {
        px: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '144px',
        width: '342px',
    },
    priceInputs: {
        mt: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    inputAdornment: {
        color: 'text.primary',
    },
    to: {
        mx: 2,
    },
};
