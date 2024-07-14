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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var helpers_1 = require("../../../helpers");
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var icons_material_1 = require("@mui/icons-material");
var context_1 = require("../../../context");
var LikeButton = function (props) {
    var handle = props.handle, _a = props.color, color = _a === void 0 ? 'text.secondary' : _a, _b = props.variant, variant = _b === void 0 ? 'icon' : _b, numLikes = props.numLikes;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var setAuthOpen = (0, react_1.useContext)(context_1.AppContext).setAuthOpen;
    var _c = (0, react_1.useState)(false), liked = _c[0], setLiked = _c[1];
    var _d = (0, hooks_1.useSocial)({
        url: '/api/v1/social',
    }), loading = _d.loading, like = _d.like, unlike = _d.unlike;
    var handleClick = function (ev) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.stopPropagation();
                    ev.preventDefault();
                    if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)) {
                        return [2 /*return*/, setAuthOpen(true)];
                    }
                    if (!liked) return [3 /*break*/, 2];
                    setLiked(false);
                    return [4 /*yield*/, unlike(handle)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    setLiked(true);
                    return [4 /*yield*/, like(handle)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (currentUser && handle) {
            if ((0, helpers_1.isLiked)(currentUser, handle)) {
                setLiked(true);
            }
            else {
                setLiked(false);
            }
        }
    }, [currentUser, handle]);
    return (react_1.default.createElement(material_1.Box, null, variant == 'icon' ? (react_1.default.createElement(material_1.IconButton, { onClick: handleClick, sx: __assign(__assign({ color: color, '&:hover': {
                color: color,
            } }, sx.icon), (liked && sx.iconLiked)) }, liked ?
        react_1.default.createElement(icons_material_1.Favorite, { fontSize: "small" }) :
        react_1.default.createElement(icons_material_1.FavoriteBorder, { fontSize: "small" }))) : (react_1.default.createElement(material_1.IconButton, { onClick: handleClick, sx: __assign(__assign({ color: color, '&:hover': {
                color: color,
            } }, sx.button), (liked && sx.buttonLiked)) }, liked ?
        react_1.default.createElement(icons_material_1.Favorite, { fontSize: "small" }) :
        react_1.default.createElement(icons_material_1.FavoriteBorder, { fontSize: "small" })))));
};
exports.default = LikeButton;
var sx = {
    icon: {},
    iconLiked: {
        color: 'primary.main',
        '&:hover': {
            color: 'primary.dark',
        },
    },
    button: {
        transition: 'transform 0.2s',
        border: '1px solid',
        borderColor: 'divider',
    },
    buttonLiked: {
        borderColor: 'primary.main',
        color: 'primary.main',
        '&:hover': {
            color: 'primary.dark',
        },
    },
};
