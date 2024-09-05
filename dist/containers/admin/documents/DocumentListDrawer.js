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
var hooks_1 = require("../../../hooks");
var hooks_2 = require("../../../hooks");
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var DocumentListItem_1 = __importDefault(require("./DocumentListItem"));
var DocumentListDrawer = function (props) {
    var _a, _b, _c;
    var open = props.open, field = props.field, handleSubmit = props.handleSubmit, handleClose = props.handleClose, _d = props.enableMultipleSelect, enableMultipleSelect = _d === void 0 ? false : _d;
    var _e = (0, react_1.useState)(''), keywords = _e[0], setKeywords = _e[1];
    var _f = (0, hooks_2.useSelected)(), selected = _f.selected, selectedIds = _f.selectedIds, setSelected = _f.setSelected, handleSelect = _f.handleSelect, handleClear = _f.handleClear;
    var _g = (0, hooks_1.useDocuments)({
        contentType: (_a = field === null || field === void 0 ? void 0 : field.foreign_collection) === null || _a === void 0 ? void 0 : _a.name,
    }), loading = _g.loading, documents = _g.documents, findDocuments = _g.findDocuments, loadMore = _g.loadMore, page = _g.page, numPages = _g.numPages;
    var handleSelectClick = function (document) {
        if (enableMultipleSelect) {
            handleSelect(document);
        }
        else {
            setSelected([document]);
        }
    };
    var handleAddClick = function () {
        handleSubmit(selected);
        setKeywords('');
        handleClear();
    };
    var handleKeywordChange = function (e) {
        setKeywords(e.target.value);
    };
    var handleSearch = function () {
        findDocuments({
            keywords: keywords,
            page: 1,
        });
    };
    var handleLoadMore = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadMore()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleLoadDocuments = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, findDocuments({
                        page: 1,
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (open && field) {
            handleLoadDocuments();
        }
    }, [open, field]);
    return (react_1.default.createElement(components_1.Drawer, { open: open, title: "Add ".concat((_b = field === null || field === void 0 ? void 0 : field.foreign_collection) === null || _b === void 0 ? void 0 : _b.singular_name), handleClose: handleClose, buttons: react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", disabled: !selected, onClick: handleAddClick }, "Add") },
        react_1.default.createElement(components_1.SearchInput, { name: "keywords", handleChange: handleKeywordChange, value: keywords, handleSearch: handleSearch, placeholder: "Search ".concat((_c = field === null || field === void 0 ? void 0 : field.foreign_collection) === null || _c === void 0 ? void 0 : _c.plural_name, "...") }),
        react_1.default.createElement(material_1.List, null, documents === null || documents === void 0 ? void 0 : documents.map(function (document, idx) { return (react_1.default.createElement(DocumentListItem_1.default, { key: idx, document: document, selected: selectedIds.includes(document === null || document === void 0 ? void 0 : document.id), handleClick: function () { return handleSelectClick(document); } })); })),
        numPages > page && (react_1.default.createElement(material_1.Button, { fullWidth: true, onClick: handleLoadMore, endIcon: loading ? react_1.default.createElement(material_1.CircularProgress, { disableShrink: true }) : react_1.default.createElement(icons_material_1.ExpandMore, null) }, "Load More"))));
};
exports.default = DocumentListDrawer;
