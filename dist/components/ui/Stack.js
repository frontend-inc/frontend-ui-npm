"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var Stack = function (props) {
    var _a = props.size, size = _a === void 0 ? 'full' : _a, _b = props.direction, direction = _b === void 0 ? 'column' : _b, _c = props.spacing, spacing = _c === void 0 ? 6 : _c, className = props.className, children = props.children;
    var isRow = direction === 'row';
    var spaceXClasses = {
        0: 'md:space-x-0',
        1: 'md:space-x-1',
        2: 'md:space-x-2',
        3: 'md:space-x-3',
        4: 'md:space-x-4',
        5: 'md:space-x-5',
        6: 'md:space-x-6',
        8: 'md:space-x-8',
        10: 'md:space-x-10',
    };
    var spaceYClasses = {
        0: 'space-y-0',
        1: 'space-y-1',
        2: 'space-y-2',
        3: 'space-y-3',
        4: 'space-y-4',
        5: 'space-y-5',
        6: 'space-y-6',
        8: 'space-y-8',
        10: 'space-y-10',
    };
    // @ts-ignore
    var rowClasses = {
        '1/2': 'md:flex-row md:w-1/2 md:space-y-0',
        '1/3': 'md:flex-row md:w-1/3 md:space-y-0',
        '1/4': 'md:flex-row md:w-1/4 md:space-y-0',
        '2/3': 'md:flex-row md:w-2/3 md:space-y-0',
        '3/4': 'md:flex-row md:w-3/4 md:space-y-0',
        full: 'md:flex-row md:w-full md:space-y-0',
    };
    return (react_1.default.createElement("div", { className: (0, react_2.cn)('flex flex-col items-start w-full', spaceYClasses[spacing], isRow && spaceXClasses[spacing], isRow && rowClasses[size], className) }, children));
};
exports.default = Stack;
