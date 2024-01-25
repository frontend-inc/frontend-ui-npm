"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var CarouselViewSkeleton = function () {
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Card, { elevation: 0 },
            react_1.default.createElement(material_1.CardActionArea, { disableRipple: true },
                react_1.default.createElement(material_1.Skeleton, { variant: "rectangular", width: '100%', height: 140 }),
                react_1.default.createElement(material_1.CardContent, null,
                    react_1.default.createElement(material_1.Skeleton, { height: 20, width: "60%" }),
                    react_1.default.createElement(material_1.Skeleton, { height: 20, width: "80%" }))))));
};
exports.default = CarouselViewSkeleton;
var sx = {
    root: {
        p: 2,
    },
};
