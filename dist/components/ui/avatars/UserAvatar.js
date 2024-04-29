"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Avatar_1 = __importDefault(require("./Avatar"));
var UserAvatar = function (props) {
    var _a;
    var user = props.user, _b = props.size, size = _b === void 0 ? 24 : _b;
    return (react_1.default.createElement(Avatar_1.default, { size: size, src: (_a = user === null || user === void 0 ? void 0 : user.avatar) === null || _a === void 0 ? void 0 : _a.url }));
};
exports.default = UserAvatar;
