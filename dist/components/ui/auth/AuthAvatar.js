"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var lucide_react_1 = require("lucide-react");
var hooks_1 = require("hooks");
var styles_1 = require("@mui/material/styles");
var AuthAvatar = function (props) {
    var _a;
    var _b = props.size, size = _b === void 0 ? 20 : _b;
    var currentUser = (0, hooks_1.useAuth)().currentUser;
    var theme = (0, styles_1.useTheme)();
    return (react_1.default.createElement(material_1.Avatar, { variant: "circular", src: (_a = currentUser === null || currentUser === void 0 ? void 0 : currentUser.avatar) === null || _a === void 0 ? void 0 : _a.url, sx: sx.avatar },
        react_1.default.createElement(lucide_react_1.User, { size: size, color: theme.palette.text.primary })));
};
exports.default = AuthAvatar;
var sx = {
    avatar: {
        height: '28px',
        width: '28px',
        bgcolor: 'accent.main',
        color: 'text.primary',
    },
};
