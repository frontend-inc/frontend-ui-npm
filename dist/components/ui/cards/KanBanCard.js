'use client';
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
var react_2 = require("@nextui-org/react");
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
var sortable_1 = require("@dnd-kit/sortable");
var utilities_1 = require("@dnd-kit/utilities");
var react_3 = require("@nextui-org/react");
var KanBanCard = function (props) {
    var id = props.id, loading = props.loading, label = props.label, primary = props.primary, secondary = props.secondary, secondaryAction = props.secondaryAction, handleClick = props.handleClick, image = props.image, enableDragging = props.enableDragging, _a = props.height, height = _a === void 0 ? 240 : _a, _b = props.slots, slots = _b === void 0 ? {
        item: {},
        image: {},
    } : _b;
    var _c = (0, sortable_1.useSortable)({
        id: id,
    }), attributes = _c.attributes, listeners = _c.listeners, setNodeRef = _c.setNodeRef, transform = _c.transform, transition = _c.transition;
    var style = {
        transform: utilities_1.CSS.Transform.toString(transform),
        transition: transition,
    };
    return (react_1.default.createElement(frontend_shadcn_1.Card, __assign({ ref: setNodeRef, style: style }, attributes, listeners, { className: (0, react_3.cn)('w-[260px] my-1 cursor-pointer overflow-hidden transition-shadow duration-300 hover:shadow-md', loading && 'opacity-50', enableDragging && 'shadow-md rotate-3') }, slots.item),
        image && (react_1.default.createElement("div", { className: "overflow-hidden rounded-t-lg" },
            react_1.default.createElement(components_1.Image, __assign({ label: label, src: image, height: height, alt: primary, handleClick: handleClick, className: "w-full object-cover" }, slots.image)))),
        react_1.default.createElement(frontend_shadcn_1.CardContent, { className: "p-4" },
            react_1.default.createElement("h3", { className: "text-lg font-semibold text-primary mb-1" }, primary),
            secondary && (react_1.default.createElement("p", { className: "text-sm text-foreground/70" }, secondary))),
        react_1.default.createElement(frontend_shadcn_1.CardFooter, { className: "flex justify-between p-4" },
            react_1.default.createElement(react_2.Button, { onPress: handleClick, size: "sm", variant: "ghost" }, "Details"),
            secondaryAction && (react_1.default.createElement("div", { className: "flex items-end" }, secondaryAction)))));
};
exports.default = KanBanCard;
