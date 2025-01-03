'use client';
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var lucide_react_1 = require("lucide-react");
var react_3 = require("@nextui-org/react");
var Pagination = function (props) {
    var count = props.count, page = props.page, onChange = props.onChange, _a = props.disabled, disabled = _a === void 0 ? false : _a, _b = props.siblingCount, siblingCount = _b === void 0 ? 1 : _b, _c = props.boundaryCount, boundaryCount = _c === void 0 ? 1 : _c, className = props.className;
    var range = function (start, end) {
        var length = end - start + 1;
        return Array.from({ length: length }, function (_, i) { return start + i; });
    };
    var startPages = range(1, Math.min(boundaryCount, count));
    var endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
    var siblingsStart = Math.max(Math.min(page - siblingCount, count - boundaryCount - siblingCount * 2 - 1), boundaryCount + 2);
    var siblingsEnd = Math.min(Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2), endPages.length > 0 ? endPages[0] - 2 : count - 1);
    var itemList = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], startPages, true), (siblingsStart > boundaryCount + 2
        ? ['ellipsis']
        : boundaryCount + 1 < count - boundaryCount
            ? [boundaryCount + 1]
            : []), true), range(siblingsStart, siblingsEnd), true), (siblingsEnd < count - boundaryCount - 1
        ? ['ellipsis']
        : count - boundaryCount > boundaryCount
            ? [count - boundaryCount]
            : []), true), endPages, true);
    var handleClick = function (value) {
        if (typeof value === 'number' && !disabled) {
            onChange({}, value);
        }
    };
    return (react_1.default.createElement("nav", { className: (0, react_2.cn)('flex items-center justify-center', className), "aria-label": "pagination navigation" },
        react_1.default.createElement("ul", { className: "flex list-none" },
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_3.Button, { isIconOnly: true, variant: "ghost", size: "sm", className: "mr-2", onPress: function () { return handleClick(page - 1); }, disabled: page === 1 || disabled, "aria-label": "Go to previous page" },
                    react_1.default.createElement(lucide_react_1.ChevronLeft, { className: "h-4 w-4" }))),
            itemList.map(function (item, index) { return (react_1.default.createElement("li", { key: index }, item === 'ellipsis' ? (react_1.default.createElement(react_3.Button, { isIconOnly: true, variant: "ghost", size: "sm", className: "mx-1", disabled: true },
                react_1.default.createElement(lucide_react_1.MoreHorizontal, { className: "h-4 w-4" }))) : (react_1.default.createElement(react_3.Button, { isIconOnly: true, variant: page === item ? 'solid' : 'ghost', className: "mx-1", onPress: function () { return handleClick(item); }, disabled: disabled, "aria-label": "Go to page ".concat(item), "aria-current": page === item ? 'page' : undefined }, item)))); }),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_3.Button, { isIconOnly: true, variant: "ghost", size: "sm", className: "ml-2", onPress: function () { return handleClick(page + 1); }, disabled: page === count || disabled, "aria-label": "Go to next page" },
                    react_1.default.createElement(lucide_react_1.ChevronRight, { className: "h-4 w-4" }))))));
};
exports.Pagination = Pagination;
