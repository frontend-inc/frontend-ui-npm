"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var frontend_shopify_1 = require("frontend-shopify");
var icons_material_1 = require("@mui/icons-material");
var RadioOption = function (props) {
    var priceOption = props.priceOption, values = props.values, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.ListItem, { disablePadding: true },
        react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: function () { return handleClick(priceOption); } },
            react_1.default.createElement(material_1.ListItemIcon, null, (values === null || values === void 0 ? void 0 : values.includes(priceOption)) ?
                react_1.default.createElement(icons_material_1.RadioButtonChecked, null) :
                react_1.default.createElement(icons_material_1.RadioButtonUnchecked, null)),
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "button", color: 'text.primary' },
                    (0, frontend_shopify_1.formatCurrency)(priceOption.min, 0),
                    " - ",
                    (0, frontend_shopify_1.formatCurrency)(priceOption.max, 0)) }))));
};
var RadioPriceRangeInput = function (props) {
    var _a = props.filters, filters = _a === void 0 ? [] : _a, options = props.options, handleClick = props.handleClick;
    var values = filters.map(function (f) { return f.value; });
    var handleFilterClick = function (value) {
        handleClick({
            name: 'price',
            value: value
        });
    };
    if ((options === null || options === void 0 ? void 0 : options.length) == 0)
        return null;
    return (react_1.default.createElement(material_1.List, { disablePadding: true }, options === null || options === void 0 ? void 0 : options.map(function (priceOption, index) { return (react_1.default.createElement(RadioOption, { key: index, 
        // @ts-ignore
        values: values, priceOption: priceOption, handleFilterClick: handleFilterClick })); })));
};
exports.default = RadioPriceRangeInput;
var sx = {
    listItemButton: {
        py: 0
    }
};
