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
var material_1 = require("@mui/material");
var Article_1 = __importDefault(require("./Article"));
var Item_1 = __importDefault(require("./Item"));
var Person_1 = __importDefault(require("./Person"));
var Document_1 = __importDefault(require("./Document"));
var Details_1 = __importDefault(require("../details/Details"));
var YouTubeVideo_1 = __importDefault(require("./addons/YouTubeVideo"));
var VimeoVideo_1 = __importDefault(require("./addons/VimeoVideo"));
var components_1 = require("../../../components");
var frontend_js_1 = require("frontend-js");
var Show = function (props) {
    var handle = props.handle;
    if (handle == 'index')
        handle = undefined;
    var _a = props || {}, _b = _a.style, style = _b === void 0 ? 'item' : _b, _resource = _a.resource, fields = _a.fields, fieldName = _a.fieldName, displayFields = _a.displayFields, url = _a.url, contentType = _a.contentType, actions = _a.actions, enableBorder = _a.enableBorder, enableCreate = _a.enableCreate, enableEdit = _a.enableEdit;
    var _c = (0, frontend_js_1.useDocuments)({
        collection: contentType,
    }), loading = _c.loading, errors = _c.errors, update = _c.update, create = _c.create, resource = _c.resource, setResource = _c.setResource, removeAttachment = _c.removeAttachment, handleDataChange = _c.handleDataChange;
    var handleRemove = function (name) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, removeAttachment(resource === null || resource === void 0 ? void 0 : resource.id, name)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var _d = (0, react_1.useState)(false), openModal = _d[0], setOpenModal = _d[1];
    var handleEdit = function () {
        setOpenModal(true);
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    resp = void 0;
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, update(resource)];
                case 1:
                    resp = _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, create(resource)];
                case 3:
                    resp = _a.sent();
                    _a.label = 4;
                case 4:
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setOpenModal(false);
                    }
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var components = {
        item: Item_1.default,
        article: Article_1.default,
        person: Person_1.default,
        document: Document_1.default,
        youtube: YouTubeVideo_1.default,
        vimeo: VimeoVideo_1.default,
    };
    var Component = components[style];
    (0, react_1.useEffect)(function () {
        if (_resource === null || _resource === void 0 ? void 0 : _resource.id) {
            setResource(_resource);
        }
    }, [_resource]);
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 2, sx: sx.root },
        (resource === null || resource === void 0 ? void 0 : resource.id) && (react_1.default.createElement(Component, { fieldName: fieldName, resource: resource, actions: actions, enableBorder: enableBorder, enableEdit: enableEdit, handleEdit: handleEdit })),
        (displayFields === null || displayFields === void 0 ? void 0 : displayFields.length) > 0 && (react_1.default.createElement(Details_1.default, { url: url, fields: displayFields, resource: resource, enableBorder: enableBorder })),
        (!(resource === null || resource === void 0 ? void 0 : resource.id) && !(_resource === null || _resource === void 0 ? void 0 : _resource.id) && enableCreate) && (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 2, sx: sx.inlineForm },
            react_1.default.createElement(components_1.Form, { loading: loading, errors: errors, fields: fields, resource: (0, frontend_js_1.flattenDocument)(resource), handleChange: handleDataChange, handleRemove: handleRemove }),
            react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, "Create"))),
        react_1.default.createElement(components_1.Drawer, { open: openModal, handleClose: function () { return setOpenModal(false); }, title: (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Edit' : 'Add', actions: react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Update' : 'Save') },
            react_1.default.createElement(components_1.Form, { loading: loading, errors: errors, fields: fields, resource: (0, frontend_js_1.flattenDocument)(resource), handleChange: handleDataChange, handleRemove: handleRemove }))));
};
exports.default = Show;
var sx = {
    root: {
        width: '100%',
    },
    inlineForm: {
        border: '1px solid',
        borderColor: 'divider',
        p: 4,
        width: '100%',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
    },
};
