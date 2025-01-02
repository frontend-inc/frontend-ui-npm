'use client';
"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var image_1 = __importDefault(require("next/image"));
var lucide_react_1 = require("lucide-react");
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var react_3 = require("@nextui-org/react");
var frontend_shadcn_1 = require("frontend-shadcn");
var components_2 = require("../../../components");
var IMAGE_WIDTH = 140;
function RenderAttachment(props) {
    var _a = props || {}, src = _a.src, _b = _a.objectFit, objectFit = _b === void 0 ? 'cover' : _b, _c = _a.size, size = _c === void 0 ? IMAGE_WIDTH : _c, onDelete = _a.onDelete, _d = _a.variant, variant = _d === void 0 ? 'file' : _d, _e = _a.alt, alt = _e === void 0 ? '' : _e;
    return (react_1.default.createElement("div", { className: "relative" },
        variant === 'image' && (react_1.default.createElement("div", { className: "relative overflow-hidden rounded", style: { height: size, width: size } },
            react_1.default.createElement(image_1.default, { alt: alt, height: size, width: size, src: src, style: { objectFit: objectFit } }))),
        variant === 'file' && (react_1.default.createElement(frontend_shadcn_1.Avatar, { className: "rounded-lg h-16 w-16" },
            react_1.default.createElement(frontend_shadcn_1.AvatarFallback, { className: "rounded-lg" },
                react_1.default.createElement(components_2.RemixIcon, { name: 'ri-file-2-line', size: 'lg' })))),
        react_1.default.createElement(react_3.Button, { isIconOnly: true, size: "sm", className: (0, react_2.cn)('text-foreground absolute -top-3 left-2', variant === 'file' && 'left-12 -top-1'), onPress: onDelete },
            react_1.default.createElement(lucide_react_1.Trash2, { className: "h-4 w-4" }))));
}
function AttachmentInput(props) {
    var _this = this;
    var _a = props || {}, name = _a.name, label = _a.label, handleChange = _a.handleChange, attachment = _a.value, handleRemove = _a.handleRemove, _b = _a.variant, variant = _b === void 0 ? 'file' : _b, _c = _a.size, size = _c === void 0 ? IMAGE_WIDTH : _c, _d = _a.objectFit, objectFit = _d === void 0 ? 'cover' : _d, info = _a.info;
    var _e = (0, react_1.useState)(null), src = _e[0], setSrc = _e[1];
    var onDrop = function (file, preview) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setSrc(preview.src);
            handleChange({
                target: {
                    name: name,
                    value: file,
                },
            });
            return [2 /*return*/];
        });
    }); };
    var onRemove = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!(attachment === null || attachment === void 0 ? void 0 : attachment.url)) {
                handleChange({
                    target: {
                        name: name,
                        value: null,
                    },
                });
            }
            setSrc(null);
            return [2 /*return*/];
        });
    }); };
    var handleDelete = function (name) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setSrc(null);
            handleRemove(name);
            return [2 /*return*/];
        });
    }); };
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-3 w-full" },
        react_1.default.createElement(components_1.InputLabel, { label: label, info: info }),
        (attachment === null || attachment === void 0 ? void 0 : attachment.url) && (react_1.default.createElement(RenderAttachment, { variant: variant, src: attachment.url, size: size, objectFit: objectFit, onDelete: function () { return handleDelete(name); } })),
        !(attachment === null || attachment === void 0 ? void 0 : attachment.url) && src && (react_1.default.createElement(RenderAttachment, { src: src, size: size, variant: variant, objectFit: objectFit, onDelete: onRemove })),
        !(attachment === null || attachment === void 0 ? void 0 : attachment.url) && !src && react_1.default.createElement(components_2.DropZone, { onDrop: onDrop })));
}
exports.default = AttachmentInput;
