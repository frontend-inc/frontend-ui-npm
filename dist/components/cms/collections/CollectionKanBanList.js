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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var __1 = require("../..");
var __2 = require("../..");
var frontend_js_1 = require("frontend-js");
var frontend_js_2 = require("frontend-js");
var hooks_1 = require("../../../hooks");
var CollectionKanBanList = function (props) {
    var headers = props.headers, _a = props.displayFields, displayFields = _a === void 0 ? [] : _a, _b = props.actions, actions = _b === void 0 ? [] : _b, enableEdit = props.enableEdit, enableDelete = props.enableDelete, enableCreate = props.enableCreate, enableComments = props.enableComments, enableFavorites = props.enableFavorites, enableLikes = props.enableLikes, enableRatings = props.enableRatings, enableSharing = props.enableSharing, enableUsers = props.enableUsers, enableGradient = props.enableGradient, enableOverlay = props.enableOverlay, rest = __rest(props, ["headers", "displayFields", "actions", "enableEdit", "enableDelete", "enableCreate", "enableComments", "enableFavorites", "enableLikes", "enableRatings", "enableSharing", "enableUsers", "enableGradient", "enableOverlay"]);
    var fieldName = 'status'; //Hard code the field as status
    var _c = (0, frontend_js_2.useQuery)(), loading = _c.loading, resources = _c.resources, updatePositions = _c.updatePositions, reloadMany = _c.reloadMany;
    var _d = (0, frontend_js_2.useResourceContext)(), resource = _d.resource, setResource = _d.setResource, update = _d.update;
    var _e = (0, react_1.useState)(false), open = _e[0], setOpen = _e[1];
    var handleClick = function (resource) {
        setResource(resource);
        setOpen(true);
    };
    var handleComment = function (resource) {
        setResource(resource);
        setOpen(true);
    };
    var _f = (0, hooks_1.useForms)(), handleEdit = _f.handleEdit, handleDeleteClick = _f.handleDeleteClick;
    var setOpenFormModal = (0, react_1.useContext)(frontend_js_1.ResourceContext).setOpenFormModal;
    var handleAdd = function (header) {
        setResource({
            status: header
        });
        setOpenFormModal(true);
    };
    var handleDrop = function (movedItem, value, columns) { return __awaiter(void 0, void 0, void 0, function () {
        var movedDocument, columnItems;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setResource(null);
                    movedDocument = (0, frontend_js_2.changeDocumentValue)(movedItem, fieldName, value);
                    return [4 /*yield*/, update(movedDocument)];
                case 1:
                    _a.sent();
                    columnItems = Object.keys(columns).map(function (key) { return columns[key]; });
                    columnItems = columnItems.reduce(function (acc, val) { return acc.concat(val); }, []);
                    columnItems = columnItems.map(function (item, index) {
                        return __assign(__assign({}, item), { position: index });
                    });
                    return [4 /*yield*/, updatePositions(columnItems)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, reloadMany()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    if (!headers || !fieldName)
        return null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(__1.KanBan, { loading: loading, actions: actions, resources: resources, activeResource: resource, headers: headers, fieldName: fieldName, displayFields: displayFields, enableOverlay: enableOverlay, enableGradient: enableGradient, handleClick: handleClick, handleDrop: handleDrop, enableEdit: enableEdit, enableDelete: enableEdit, enableCreate: enableCreate, handleEdit: handleEdit, handleDelete: handleDeleteClick, handleAdd: handleAdd, enableComments: enableComments, enableFavorites: enableFavorites, enableRatings: enableRatings, handleComment: handleComment }),
        react_1.default.createElement(__2.ResourceModal, { open: open, handleClose: function () { return setOpen(false); }, actions: actions, displayFields: displayFields, enableOverlay: enableOverlay, enableEdit: enableEdit, enableComments: enableComments, enableFavorites: enableFavorites, enableRatings: enableRatings, handleEdit: function () { return handleEdit(resource); } })));
};
exports.default = CollectionKanBanList;
