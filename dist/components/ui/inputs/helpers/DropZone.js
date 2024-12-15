'use client';
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
var react_dropzone_1 = require("react-dropzone");
var lucide_react_1 = require("lucide-react");
var DropZone = function (props) {
    var _a = props || {}, onDrop = _a.onDrop, _b = _a.label, label = _b === void 0 ? 'Upload file' : _b, _c = _a.dropLabel, dropLabel = _c === void 0 ? 'Drop file here' : _c;
    var _d = (0, react_1.useState)(false), loading = _d[0], setLoading = _d[1];
    var handleOnDrop = (0, react_1.useCallback)(function (files) {
        var reader = new FileReader();
        var file = files[0];
        reader.onload = function (e) { return __awaiter(void 0, void 0, void 0, function () {
            var preview, error_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        preview = {
                            src: (_a = e.target) === null || _a === void 0 ? void 0 : _a.result,
                            name: file.name,
                            size: file.size,
                            type: file.type,
                        };
                        setLoading(true);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, onDrop(file, preview)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _b.sent();
                        console.error('Error uploading file:', error_1);
                        return [3 /*break*/, 5];
                    case 4:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        reader.readAsDataURL(file);
    }, [onDrop]);
    var _e = (0, react_dropzone_1.useDropzone)({
        onDrop: handleOnDrop,
    }), getRootProps = _e.getRootProps, getInputProps = _e.getInputProps, isDragActive = _e.isDragActive;
    return (react_1.default.createElement("div", __assign({}, getRootProps(), { className: "h-[120px] w-full bg-background m-px p-4 flex flex-col justify-center items-center rounded border-2 border-border text-center hover:border-2 hover:border-primary hover:cursor-pointer transition-all duration-300" }),
        react_1.default.createElement("input", __assign({}, getInputProps())),
        loading ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "text-foreground w-5 h-5 animate-spin" })) : (react_1.default.createElement(react_1.default.Fragment, null,
            isDragActive ? (react_1.default.createElement(lucide_react_1.DownloadCloud, { className: "text-foreground w-5 h-5" })) : (react_1.default.createElement(lucide_react_1.UploadCloud, { className: "text-foreground w-5 h-5" })),
            react_1.default.createElement("p", { className: "mt-2 text-sm text-foreground" }, isDragActive ? dropLabel : label)))));
};
exports.default = DropZone;
