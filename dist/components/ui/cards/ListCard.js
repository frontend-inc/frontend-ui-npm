'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var __1 = require("../..");
var core_1 = require("../../core");
var ListCard = function (props) {
    var _a = props || {}, _b = _a.circular, circular = _b === void 0 ? false : _b, _c = _a.sortable, sortable = _c === void 0 ? false : _c, _d = _a.selectable, selectable = _d === void 0 ? false : _d, _e = _a.selected, selected = _e === void 0 ? false : _e, label = _a.label, title = _a.title, subtitle = _a.subtitle, actions = _a.actions, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, handleSelect = _a.handleSelect, image = _a.image, _f = _a.size, size = _f === void 0 ? 140 : _f, disableImage = _a.disableImage, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay;
    return (react_1.default.createElement("button", { onClick: handleClick, className: "p-4 w-full border-b border-border last:border-b-0 hover:bg-muted/50" },
        react_1.default.createElement("div", { className: "flex flex-row items-center w-full" },
            selectable && (react_1.default.createElement("div", { className: "mr-2" },
                react_1.default.createElement(frontend_shadcn_1.Checkbox, { checked: selected, onCheckedChange: handleSelect }))),
            sortable && (react_1.default.createElement(__1.Icon, { name: "GripVertical", className: "text-muted-foreground" })),
            react_1.default.createElement("div", { className: "flex flex-row justify-start items-start space-x-4 flex-grow" },
                !disableImage && (react_1.default.createElement("div", { className: "flex-shrink-0 w-[180px]" },
                    react_1.default.createElement("div", { className: "w-full pr-2 h-full flex flex-row justify-center items-center" }, circular ? (react_1.default.createElement(__1.AvatarImage, { src: image, size: size, alt: title, enableGradient: enableGradient, enableOverlay: enableOverlay })) : (react_1.default.createElement(__1.Image, { label: label, src: image, height: size, alt: title, aspectRatio: 1.0, enableGradient: enableGradient, enableOverlay: enableOverlay }))))),
                react_1.default.createElement("div", { className: "flex flex-col justify-between min-h-[120px] flex-grow" },
                    react_1.default.createElement("div", { className: "flex flex-col space-y-1" },
                        react_1.default.createElement(core_1.Typography, { variant: "subtitle1" }, title),
                        react_1.default.createElement(core_1.Typography, { variant: "body2", className: "text-muted-foreground" }, subtitle)),
                    react_1.default.createElement("div", { className: "flex flex-row justify-between items-center w-full" },
                        actions,
                        secondaryAction))))));
};
exports.default = ListCard;
