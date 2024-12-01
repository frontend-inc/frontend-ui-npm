"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var Grid = function (props) {
    var _a = props.sm, sm = _a === void 0 ? 2 : _a, _b = props.md, md = _b === void 0 ? 3 : _b, _c = props.lg, lg = _c === void 0 ? 3 : _c, _d = props.xl, xl = _d === void 0 ? 3 : _d, _e = props.spacing, spacing = _e === void 0 ? 2 : _e, className = props.className, children = props.children;
    var gridClasses = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
    };
    var spacingClasses = {
        0: 'gap-0',
        1: 'gap-1',
        2: 'gap-2',
        3: 'gap-3',
        4: 'gap-4',
        5: 'gap-5',
        6: 'gap-6',
        8: 'gap-8',
        10: 'gap-10',
    };
    var smGridClasses = "sm:".concat(gridClasses[sm]);
    var mdGridClasses = "md:".concat(gridClasses[md]);
    var lgGridClasses = "lg:".concat(gridClasses[lg]);
    var xlGridClasses = "xl:".concat(gridClasses[xl]);
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('grid w-full grid-cols-1', smGridClasses, mdGridClasses, lgGridClasses, xlGridClasses, spacingClasses[spacing], className) }, children));
};
exports.default = Grid;
