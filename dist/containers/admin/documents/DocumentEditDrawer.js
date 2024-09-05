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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var material_1 = require("@mui/material");
var AdminDocumentForm_1 = __importDefault(require("./AdminDocumentForm"));
var PublishButton_1 = __importDefault(require("./inputs/PublishButton"));
var SaveButton_1 = __importDefault(require("./inputs/SaveButton"));
var DocumentEditDrawer = function (props) {
    var open = props.open, handleClose = props.handleClose, documentId = props.documentId, collectionId = props.collectionId, handleSubmitItems = props.handleSubmit;
    var _a = (0, react_1.useState)(null), title = _a[0], setTitle = _a[1];
    var _b = (0, react_1.useState)(null), activeFields = _b[0], setActiveFields = _b[1];
    var _c = (0, hooks_1.useCollections)(), collection = _c.collection, findCollection = _c.findCollection;
    var _d = (0, hooks_1.useDocuments)({
        contentType: collectionId,
    }), loading = _d.loading, errors = _d.errors, document = _d.document, setDocument = _d.setDocument, findDocument = _d.findDocument, updateDocument = _d.updateDocument, createDocument = _d.createDocument, addAttachment = _d.addAttachment, removeAttachment = _d.removeAttachment, addReferences = _d.addReferences, removeReferences = _d.removeReferences, handleChange = _d.handleChange;
    var handleSubmit = function (document) { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(document === null || document === void 0 ? void 0 : document.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, updateDocument(document)];
                case 1:
                    resp = _b.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, createDocument(__assign(__assign({}, document), { content_type: collection === null || collection === void 0 ? void 0 : collection.name }))];
                case 3:
                    resp = _b.sent();
                    _b.label = 4;
                case 4:
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        handleSubmitItems([resp]);
                        findDocument((_a = resp === null || resp === void 0 ? void 0 : resp.data) === null || _a === void 0 ? void 0 : _a.id);
                        setDocument({});
                        handleClose();
                    }
                    return [2 /*return*/, resp];
            }
        });
    }); };
    var handleSubmitAndPublish = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            handleSubmit(__assign(__assign({}, document), { published: !document.published }));
            return [2 /*return*/];
        });
    }); };
    var handleSortFields = function (unsortedFields) {
        var sortedFields = unsortedFields
            .filter(function (field) { return field.visible === true; })
            .sort(function (a, b) { return a.position - b.position; });
        setActiveFields(sortedFields);
    };
    var handleAddReferences = function (documentIds) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, addReferences(document === null || document === void 0 ? void 0 : document.id, documentIds)];
                case 1:
                    _a.sent();
                    findDocument(document === null || document === void 0 ? void 0 : document.id);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleRemoveReferences = function (documentIds) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, removeReferences(document === null || document === void 0 ? void 0 : document.id, documentIds)];
                case 1:
                    _a.sent();
                    findDocument(document === null || document === void 0 ? void 0 : document.id);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleAddAttachment = function (contentType, documentId) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, addAttachment(document === null || document === void 0 ? void 0 : document.id, contentType, documentId)];
                case 1:
                    _a.sent();
                    setDocument(null);
                    findDocument(document === null || document === void 0 ? void 0 : document.id);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleRemoveAttachment = function (field) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, removeAttachment(document === null || document === void 0 ? void 0 : document.id, field)];
                case 1:
                    _a.sent();
                    setDocument({});
                    findDocument(document === null || document === void 0 ? void 0 : document.id);
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (collection === null || collection === void 0 ? void 0 : collection.fields) {
            handleSortFields(collection === null || collection === void 0 ? void 0 : collection.fields);
        }
    }, [collection === null || collection === void 0 ? void 0 : collection.fields]);
    (0, react_1.useEffect)(function () {
        var singular_name = (collection || {}).singular_name;
        if (document === null || document === void 0 ? void 0 : document.id) {
            setTitle("Edit ".concat(singular_name));
        }
        else if (!(document === null || document === void 0 ? void 0 : document.id)) {
            setTitle("Add ".concat(singular_name));
        }
    }, [documentId, collection]);
    (0, react_1.useEffect)(function () {
        if (open && collectionId) {
            findCollection(collectionId);
        }
    }, [open, collectionId]);
    (0, react_1.useEffect)(function () {
        setDocument({});
        if (open && documentId && (collection === null || collection === void 0 ? void 0 : collection.name)) {
            findDocument(documentId);
        }
    }, [open, collection === null || collection === void 0 ? void 0 : collection.name, documentId]);
    return (react_1.default.createElement(components_1.Drawer, { open: open, handleClose: handleClose, title: title }, document && activeFields && (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Box, { sx: sx.container },
            react_1.default.createElement(AdminDocumentForm_1.default, { errors: errors, document: document, fields: activeFields, collection: collection, handleChange: handleChange, handleAddReferences: handleAddReferences, handleRemoveReferences: handleRemoveReferences, handleAddAttachment: handleAddAttachment, handleRemoveAttachment: handleRemoveAttachment })),
        react_1.default.createElement(material_1.Stack, { spacing: 2 },
            react_1.default.createElement(SaveButton_1.default, { fullWidth: true, loading: loading, document: document, handleSubmit: function () { return handleSubmit(document); } }),
            react_1.default.createElement(PublishButton_1.default, { fullWidth: true, loading: loading, document: document, handleTogglePublish: handleSubmitAndPublish }))))));
};
exports.default = DocumentEditDrawer;
var sx = {
    container: {
        width: {
            sm: 'auto',
            xs: '100vw',
        },
    },
    icon: {
        height: 28,
        width: 28,
    },
    progressLoader: {
        p: 0,
    },
};
