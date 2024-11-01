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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../../../hooks");
var components_1 = require("../../../../components");
var core_1 = require("../../../../components/core");
var lucide_react_1 = require("lucide-react");
var DocumentList_1 = __importDefault(require("./DocumentList"));
var DocumentEdit_1 = __importDefault(require("./DocumentEdit"));
var ReferenceItem_1 = __importDefault(require("./ReferenceItem"));
var helpers_1 = require("../../../../helpers");
var ReferenceInput = function (props) {
    var _a, _b, _c;
    var field = props.field, document = props.document, collection = props.collection, handleAddReferences = props.handleAddReferences, handleRemoveReferences = props.handleRemoveReferences, _d = props.enableMultipleSelect, enableMultipleSelect = _d === void 0 ? false : _d;
    var _e = (0, react_1.useState)(), resources = _e[0], setResources = _e[1];
    var _f = (0, react_1.useState)(false), open = _f[0], setOpen = _f[1];
    var _g = (0, react_1.useState)(false), openEdit = _g[0], setOpenEdit = _g[1];
    var _h = (0, react_1.useState)({}), foreignDocument = _h[0], setForeignDocument = _h[1];
    var updateReferencePositions = (0, hooks_1.useAdminDocuments)({
        collection: collection === null || collection === void 0 ? void 0 : collection.name,
    }).updateReferencePositions;
    var handleSubmit = function (resources) { return __awaiter(void 0, void 0, void 0, function () {
        var resourceIds;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    resourceIds = resources.map(function (resource) { return resource === null || resource === void 0 ? void 0 : resource.id; });
                    return [4 /*yield*/, handleAddReferences(resourceIds)];
                case 1:
                    _a.sent();
                    setOpen(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleAddClick = function () {
        setForeignDocument({});
        setOpenEdit(true);
    };
    var handleEdit = function (resource) {
        setForeignDocument(resource);
        setOpenEdit(true);
    };
    var handleRemove = function (resource) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleRemoveReferences([resource === null || resource === void 0 ? void 0 : resource.target_id])];
                case 1:
                    _a.sent();
                    setOpen(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDrop = function (sorted) { return __awaiter(void 0, void 0, void 0, function () {
        var sortedReferences;
        return __generator(this, function (_a) {
            sortedReferences = sorted.map(function (reference, index) { return (__assign(__assign({}, reference), { position: index })); });
            updateReferencePositions(document === null || document === void 0 ? void 0 : document.id, sortedReferences);
            return [2 /*return*/];
        });
    }); };
    (0, react_1.useEffect)(function () {
        var _a;
        if (field && document) {
            if ((field === null || field === void 0 ? void 0 : field.variant) == 'habtm') {
                var references = (0, helpers_1.filterReferences)(document, (_a = field === null || field === void 0 ? void 0 : field.foreign_collection) === null || _a === void 0 ? void 0 : _a.class_name);
                setResources(references || []);
            }
        }
    }, [field, document]);
    return (react_1.default.createElement("div", { className: "w-full" },
        resources && field && (react_1.default.createElement(components_1.SortableList, { droppableId: 'sortable-documents', items: resources, handleDrop: handleDrop, renderItem: function (item, idx) { return (react_1.default.createElement(ReferenceItem_1.default, { key: idx, item: item, handleEditItem: handleEdit, handleRemoveItem: handleRemove })); } })),
        react_1.default.createElement("div", { className: "flex flex-row space-x-1" },
            react_1.default.createElement(core_1.Button, { color: "secondary", onClick: function () { return setOpen(true); }, startIcon: react_1.default.createElement(lucide_react_1.Search, { className: "w-5 h-5 text-foreground" }) },
                "Choose ", (_a = field === null || field === void 0 ? void 0 : field.foreign_collection) === null || _a === void 0 ? void 0 :
                _a.plural_name),
            react_1.default.createElement(core_1.Button, { color: "secondary", onClick: handleAddClick },
                "Add ", (_b = field === null || field === void 0 ? void 0 : field.foreign_collection) === null || _b === void 0 ? void 0 :
                _b.singular_name)),
        react_1.default.createElement(DocumentList_1.default, { enableMultipleSelect: enableMultipleSelect, open: open, field: field, handleSubmit: handleSubmit, handleClose: function () { return setOpen(false); } }),
        react_1.default.createElement(DocumentEdit_1.default, { open: openEdit, handleClose: function () { return setOpenEdit(false); }, handleSubmit: handleSubmit, documentId: foreignDocument === null || foreignDocument === void 0 ? void 0 : foreignDocument.id, collectionId: (_c = field === null || field === void 0 ? void 0 : field.foreign_collection) === null || _c === void 0 ? void 0 : _c.name })));
};
exports.default = ReferenceInput;
