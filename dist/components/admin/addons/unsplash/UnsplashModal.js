'use client';
"use strict";
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
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../../hooks");
var components_1 = require("../../../../components");
var UnsplashLogo_1 = __importDefault(require("./UnsplashLogo"));
var components_2 = require("../../../../components");
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var PoweredByUnsplash_1 = __importDefault(require("./PoweredByUnsplash"));
var hooks_2 = require("../../../../hooks");
var image_1 = __importDefault(require("next/image"));
var link_1 = __importDefault(require("next/link"));
var UnsplashModal = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var _j = _a.loading, loading = _j === void 0 ? false : _j, open = _a.open, image = _a.image, handleClose = _a.handleClose, handleUpload = _a.handleUpload;
    var showAlertSuccess = (0, hooks_1.useAlerts)().showAlertSuccess;
    var fetchDownloadLocation = (0, hooks_2.useUnsplash)().fetchDownloadLocation;
    var handleCopyUrlClick = function () {
        var _a;
        (0, copy_to_clipboard_1.default)((_a = image === null || image === void 0 ? void 0 : image.urls) === null || _a === void 0 ? void 0 : _a.regular);
        showAlertSuccess('Asset URL copied to clipboard');
    };
    var handleDownloadClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var downloadUrl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchDownloadLocation(image)];
                case 1:
                    downloadUrl = _a.sent();
                    handleUpload(downloadUrl, image === null || image === void 0 ? void 0 : image.slug);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleUnsplashClick = function () {
        var _a;
        var url = ((_a = image === null || image === void 0 ? void 0 : image.links) === null || _a === void 0 ? void 0 : _a.html) + '?utm_source=frontend.co&utm_medium=referral';
        window.open(url, '_blank');
    };
    var handleUserClick = function () {
        var _a, _b;
        var url = ((_b = (_a = image === null || image === void 0 ? void 0 : image.user) === null || _a === void 0 ? void 0 : _a.links) === null || _b === void 0 ? void 0 : _b.html) + '?utm_source=frontend.co&utm_medium=referral';
        window.open(url, '_blank');
    };
    return (react_1.default.createElement(components_1.Modal, { open: open, loading: loading, handleClose: handleClose, title: react_1.default.createElement(PoweredByUnsplash_1.default, null), maxWidth: "md", buttons: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(components_2.Button, { variant: "secondary", onClick: handleUnsplashClick, className: "flex items-center", endIcon: react_1.default.createElement(components_1.Icon, { name: "ExternalLink", className: "text-secondary-foreground" }) },
                react_1.default.createElement(UnsplashLogo_1.default, { className: 'fill-white' })),
            react_1.default.createElement(components_2.Button, { variant: "secondary", onClick: handleCopyUrlClick, className: "flex items-center" },
                react_1.default.createElement(components_1.Icon, { name: "Copy", className: "text-secondary-foreground mr-2" }),
                "Copy URL"),
            react_1.default.createElement(components_2.Button, { onClick: handleDownloadClick, className: "flex items-center" },
                react_1.default.createElement(components_1.Icon, { name: "Download", className: "mr-2 text-primary-contrast" }),
                "Import")) }, !loading ? (react_1.default.createElement("div", { className: "flex flex-col w-full" },
        react_1.default.createElement(image_1.default, { alt: image === null || image === void 0 ? void 0 : image.alt_description, src: (_b = image === null || image === void 0 ? void 0 : image.urls) === null || _b === void 0 ? void 0 : _b.regular, height: 250, width: 500, className: "object-cover max-h-[250px] w-full rounded-lg" }),
        react_1.default.createElement("div", { className: "py-2 w-full flex flex-row justify-between items-start" },
            react_1.default.createElement("div", { className: "w-full" },
                react_1.default.createElement("div", { className: "flex items-center" },
                    react_1.default.createElement("button", { className: "relative w-[32px] h-[32px] rounded-full mr-2", onClick: handleUserClick },
                        react_1.default.createElement(image_1.default
                        // @ts-ignore
                        , { 
                            // @ts-ignore
                            src: (_d = (_c = image === null || image === void 0 ? void 0 : image.user) === null || _c === void 0 ? void 0 : _c.profile_image) === null || _d === void 0 ? void 0 : _d.small, alt: (_e = image === null || image === void 0 ? void 0 : image.user) === null || _e === void 0 ? void 0 : _e.name, layout: "fill", className: 'object-cover rounded-full' })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(link_1.default, { href: "".concat((_g = (_f = image === null || image === void 0 ? void 0 : image.user) === null || _f === void 0 ? void 0 : _f.links) === null || _g === void 0 ? void 0 : _g.html, "?utm_source=frontend.co&utm_medium=referral"), target: "_blank", rel: "noopener noreferrer", className: "text-sm text-foreground hover:text-foreground/90" }, (_h = image === null || image === void 0 ? void 0 : image.user) === null || _h === void 0 ? void 0 : _h.name),
                        react_1.default.createElement(components_2.Typography, { variant: "body2", className: "text-gray-500 w-full" }, image === null || image === void 0 ? void 0 : image.description))))))) : (react_1.default.createElement("div", { className: "p-6 flex justify-center items-center w-full" },
        react_1.default.createElement(components_2.CircularProgress, null)))));
};
exports.default = UnsplashModal;
