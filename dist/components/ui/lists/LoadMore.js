"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var react_waypoint_1 = require("react-waypoint");
var icons_material_1 = require("@mui/icons-material");
var LoadMore = function (props) {
    var _a = props.enableInfiniteLoad, enableInfiniteLoad = _a === void 0 ? true : _a, _b = props.page, page = _b === void 0 ? 1 : _b, _c = props.numPages, numPages = _c === void 0 ? 1 : _c, loadMore = props.loadMore;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root }, page < numPages && (react_1.default.createElement(react_1.default.Fragment, null,
        enableInfiniteLoad && react_1.default.createElement(react_waypoint_1.Waypoint, { onEnter: loadMore }),
        react_1.default.createElement(material_1.Button, { color: "secondary", variant: "contained", onClick: loadMore, endIcon: react_1.default.createElement(icons_material_1.ExpandMore, null) }, "Load More")))));
};
exports.default = LoadMore;
var sx = {
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};
