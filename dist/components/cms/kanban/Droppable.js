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
var core_1 = require("@dnd-kit/core");
var material_1 = require("@mui/material");
var Droppable = function (_a) {
    var id = _a.id;
    var _b = (0, core_1.useDroppable)({
        id: id,
    }), isOver = _b.isOver, setNodeRef = _b.setNodeRef;
    return (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: __assign(__assign({}, sx.root), (isOver && sx.isOver)), ref: setNodeRef }));
};
exports.default = Droppable;
var sx = {
    root: {
        borderRadius: 1,
        width: 260,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        height: '100%',
    },
    isOver: {
        borderColor: 'primary.main',
    },
};
