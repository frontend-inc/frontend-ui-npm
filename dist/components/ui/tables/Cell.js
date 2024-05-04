"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var Cell = function (props) {
    var field = props.field, row = props.row, value = props.value, handleClick = props.handleClick;
    var componentMapper = {
        array: components_1.CellArray,
        boolean: components_1.CellBoolean,
        date: components_1.CellDate,
        datetime: components_1.CellDate,
        image: components_1.CellImage,
        video: components_1.CellVideo,
        json: components_1.CellJSON,
        url: components_1.CellLink,
        rating: components_1.CellRating,
        number: components_1.CellString,
        text: components_1.CellText,
        price: components_1.CellPrice,
        shopify_product: components_1.CellText,
        shopify_collection: components_1.CellText,
        habtm: components_1.CellHABTM,
        string: components_1.CellString,
        select: components_1.CellEnum,
        user: components_1.CellUser,
        file: components_1.CellFile,
    };
    var CellComponent = componentMapper[field.variant];
    return (react_1.default.createElement(CellComponent, { value: value, row: row, field: field, handleClick: handleClick }));
};
exports.default = Cell;
