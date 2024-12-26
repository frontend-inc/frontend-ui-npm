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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_dropzone_1 = require("react-dropzone");
var image_1 = __importDefault(require("next/image"));
var lucide_react_1 = require("lucide-react");
var __1 = require("../.."); // Adjust the import path as needed
var __2 = require("../.."); // Adjust the import path as needed
var sonner_1 = require("sonner");
var frontend_shadcn_1 = require("frontend-shadcn"); // Adjust the import path as needed
// PreviewFile Component
var PreviewFile = function (_a) {
    var index = _a.index, file = _a.file, handleDelete = _a.handleDelete;
    var isImage = file.type.startsWith('image/');
    var _b = (0, react_1.useState)(null), preview = _b[0], setPreview = _b[1];
    (0, react_1.useEffect)(function () {
        if (isImage) {
            var objectUrl_1 = URL.createObjectURL(file);
            setPreview(objectUrl_1);
            // Clean up the object URL when component unmounts
            return function () { return URL.revokeObjectURL(objectUrl_1); };
        }
    }, [file, isImage]);
    return (react_1.default.createElement("div", { className: "flex items-center space-x-4 p-2 border rounded-md" },
        isImage ? (react_1.default.createElement("div", { className: "relative w-16 h-16" }, preview && (react_1.default.createElement(image_1.default, { src: preview, alt: file.name, fill: true, style: { objectFit: 'cover' }, className: "rounded-md" })))) : (react_1.default.createElement("div", { className: "h-16 w-16 bg-muted rounded-md flex items-center justify-center" },
            react_1.default.createElement(lucide_react_1.File, { className: "h-6 w-6" }))),
        react_1.default.createElement("div", { className: "flex-1" },
            react_1.default.createElement("p", { className: "text-sm font-medium text-foreground" }, file.name),
            react_1.default.createElement("p", { className: "text-xs text-muted-foreground" },
                (file.size / (1024 * 1024)).toFixed(2),
                " MB")),
        react_1.default.createElement(__1.Button, { variant: "ghost", size: "icon", className: "text-red-500", onClick: function () { return handleDelete(index); }, "aria-label": "Remove ".concat(file.name) },
            react_1.default.createElement(lucide_react_1.Trash2, { className: "h-4 w-4" }))));
};
// FileUploader Component
var FileUploader = function (_a) {
    var label = _a.label, loading = _a.loading, handleSubmit = _a.handleSubmit;
    var _b = (0, react_1.useState)([]), files = _b[0], setFiles = _b[1];
    var _c = (0, react_1.useState)(false), isUploading = _c[0], setIsUploading = _c[1];
    var _d = (0, react_1.useState)(false), isDropzoneLoading = _d[0], setIsDropzoneLoading = _d[1];
    var MAX_SIZE = 10 * 1024 * 1024; // 10MB in bytes
    // Handle file drops
    var onDrop = function (droppedFiles) { return __awaiter(void 0, void 0, void 0, function () {
        var validFiles, hasInvalidFiles;
        return __generator(this, function (_a) {
            validFiles = [];
            hasInvalidFiles = false;
            droppedFiles.forEach(function (file) {
                if (file.size > MAX_SIZE) {
                    hasInvalidFiles = true;
                    sonner_1.toast.error("File \"".concat(file.name, "\" exceeds 10MB and was not added."));
                }
                else {
                    validFiles.push(file);
                }
            });
            if (validFiles.length > 0) {
                setFiles(function (prevFiles) { return __spreadArray(__spreadArray([], prevFiles, true), validFiles, true); });
            }
            if (droppedFiles.length > 0 && validFiles.length === 0) {
                sonner_1.toast.error('No valid files were added.');
            }
            return [2 /*return*/];
        });
    }); };
    // Configure react-dropzone
    var _e = (0, react_dropzone_1.useDropzone)({
        onDrop: onDrop,
        multiple: true,
    }), getRootProps = _e.getRootProps, getInputProps = _e.getInputProps, isDragActive = _e.isDragActive;
    // Handle file removal
    var onRemove = function (index) {
        setFiles(function (prevFiles) { return prevFiles.filter(function (_, i) { return i !== index; }); });
    };
    // Handle file upload
    var onUpload = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setIsDropzoneLoading(true);
                    return [4 /*yield*/, handleSubmit(files)];
                case 1:
                    _a.sent();
                    setFiles([]); // Clear files after successful upload
                    sonner_1.toast.success('Files uploaded successfully!');
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error uploading files:', error_1);
                    sonner_1.toast.error('Failed to upload files. Please try again.');
                    return [3 /*break*/, 4];
                case 3:
                    setIsDropzoneLoading(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-4 w-full" },
        react_1.default.createElement(__2.InputLabel, { label: label }),
        files.length > 0 && (react_1.default.createElement("div", { className: "space-y-2" }, files.map(function (file, index) { return (react_1.default.createElement(PreviewFile, { key: index, index: index, file: file, handleDelete: onRemove })); }))),
        react_1.default.createElement("div", __assign({}, getRootProps(), { className: (0, frontend_shadcn_1.cn)('h-[120px] w-full bg-background m-px p-4 flex flex-col justify-center items-center rounded border-2 border-border text-center hover:border-2 hover:border-primary hover:cursor-pointer transition-all duration-300', isDragActive ? 'border-primary bg-opacity-50' : '') }),
            react_1.default.createElement("input", __assign({}, getInputProps())),
            isDropzoneLoading ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "text-foreground w-8 h-8 animate-spin" })) : (react_1.default.createElement(react_1.default.Fragment, null,
                isDragActive ? (react_1.default.createElement(lucide_react_1.DownloadCloud, { className: "text-foreground w-5 h-5" })) : (react_1.default.createElement(lucide_react_1.UploadCloud, { className: "text-foreground w-5 h-5" })),
                react_1.default.createElement("p", { className: "mt-2 text-sm text-foreground" }, isDragActive ? 'Drop files here...' : 'Drag & drop files here, or click to select files')))),
        files.length > 0 && (react_1.default.createElement(__1.Button, { onClick: onUpload, disabled: isDropzoneLoading }, isDropzoneLoading ? 'Uploading...' : 'Upload Files'))));
};
exports.default = FileUploader;
