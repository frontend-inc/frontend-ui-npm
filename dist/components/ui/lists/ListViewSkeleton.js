"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var ListViewSkeleton = function (_a) {
    var props = __rest(_a, []);
    return (react_1.default.createElement(material_1.ListItem, { disableGutters: true },
        react_1.default.createElement(material_1.ListItemIcon, null,
            react_1.default.createElement(material_1.Skeleton, { variant: "rectangular", width: 100, height: 100, sx: sx.skeletonImage })),
        react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Skeleton, { height: 20, width: 120 }), secondary: react_1.default.createElement(material_1.Skeleton, { height: 20, width: 180 }) })));
};
exports.default = ListViewSkeleton;
var sx = {
    skeletonImage: {
        marginRight: "10px",
    },
};
