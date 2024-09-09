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
var components_1 = require("../../../../components");
var hooks_1 = require("../../../../hooks");
var hooks_2 = require("../../../../hooks");
var material_1 = require("@mui/material");
var MediaListItem_1 = __importDefault(require("./MediaListItem"));
var __1 = require("../../..");
var MediaList_1 = __importDefault(require("./MediaList"));
var components_2 = require("../../../../components");
var MediaBrowser = function (props) {
    var open = props.open, handleClose = props.handleClose, handleSubmit = props.handleSubmit;
    var _a = (0, react_1.useState)(0), tab = _a[0], setTab = _a[1];
    var _b = (0, react_1.useState)(null), selected = _b[0], setSelected = _b[1];
    var _c = (0, react_1.useState)(null), uploaded = _c[0], setUploaded = _c[1];
    var showAlertError = (0, hooks_2.useAlerts)().showAlertError;
    var deleteResource = (0, hooks_1.useMedia)().deleteResource;
    var handleTabChange = function (value) {
        setTab(value);
    };
    var handleSelect = function (resource) {
        setSelected(resource);
    };
    // Upload methods
    var handleRemoveItem = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deleteResource(uploaded.id)];
                case 1:
                    _a.sent();
                    setUploaded(null);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleComplete = function (resource) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setUploaded(resource);
            setSelected(resource);
            setTab(0);
            return [2 /*return*/];
        });
    }); };
    var handleAttach = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (selected) {
                handleSubmit([selected]);
                handleClose();
            }
            else {
                showAlertError('There was an error saving the document');
            }
            return [2 /*return*/];
        });
    }); };
    var OPTIONS = [
        { label: 'Browse', value: 0 },
        { label: 'Upload', value: 1 },
        { label: 'Unsplash', value: 2 },
    ];
    return (react_1.default.createElement(components_1.Drawer, { disablePadding: true, open: open, handleClose: handleClose, title: 'Browse Media', buttons: react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleAttach }, "Save") },
        react_1.default.createElement(material_1.Box, null,
            react_1.default.createElement(material_1.Box, { p: 1 },
                react_1.default.createElement(components_1.ButtonTabs, { disableBorder: true, disablePadding: true, options: OPTIONS, handleChange: handleTabChange, value: tab })),
            react_1.default.createElement(material_1.Box, { sx: sx.content },
                tab == 0 && (react_1.default.createElement(MediaList_1.default, { selectedIds: [selected === null || selected === void 0 ? void 0 : selected.id], handleSelect: handleSelect })),
                tab == 1 && (react_1.default.createElement(react_1.default.Fragment, null,
                    uploaded && (react_1.default.createElement(MediaListItem_1.default, { item: uploaded, handleRemoveItem: handleRemoveItem })),
                    react_1.default.createElement(__1.MediaUploader, { onComplete: handleComplete }))),
                tab == 2 && (react_1.default.createElement(react_1.default.Fragment, null,
                    uploaded && (react_1.default.createElement(MediaListItem_1.default, { item: uploaded, handleRemoveItem: handleRemoveItem })),
                    react_1.default.createElement(components_2.UnsplashList, { onComplete: handleComplete })))))));
};
exports.default = MediaBrowser;
var sx = {
    icon: {
        height: 28,
        width: 28,
    },
    progressLoader: {
        p: 0,
    },
    content: {
        p: 2,
    },
};
