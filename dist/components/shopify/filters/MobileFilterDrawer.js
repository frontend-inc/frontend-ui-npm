"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var PriceRangeInput_1 = __importDefault(require("./PriceRangeInput"));
var MobileFilterDrawer = function (props) {
    // Price props
    var _a = props || {}, open = _a.open, handleClose = _a.handleClose, priceRange = _a.priceRange, handlePriceChange = _a.handlePriceChange, minPrice = _a.minPrice, maxPrice = _a.maxPrice;
    return (react_1.default.createElement(components_1.Drawer, { open: open, handleClose: handleClose, title: "Filters", anchor: "right" },
        react_1.default.createElement(material_1.Box, { sx: sx.heading },
            react_1.default.createElement(material_1.Typography, { variant: "overline", sx: sx.title }, "Price")),
        react_1.default.createElement(PriceRangeInput_1.default, { handleChange: handlePriceChange, minPrice: minPrice, maxPrice: maxPrice, value: priceRange })));
};
exports.default = MobileFilterDrawer;
var sx = {
    root: {},
    mobileDrawer: {
        width: {
            xs: "270px",
            sm: "360px",
        },
    },
    title: {
        ml: 2,
        mb: 0,
        p: 0,
    },
    heading: {
        mt: 4,
    },
};
