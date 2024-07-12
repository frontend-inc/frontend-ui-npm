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
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var frontend_js_1 = require("frontend-js");
var SortableDocumentLinks_1 = __importDefault(require("./helpers/SortableDocumentLinks"));
var ReferenceInput = function (props) {
    var _a;
    var _b = props || {}, label = _b.label, _resource = _b.resource, url = _b.url, foreignUrl = _b.foreignUrl, contentType = _b.contentType;
    var _c = (0, frontend_js_1.useResource)({
        url: url,
        name: 'document'
    }), resource = _c.resource, setResource = _c.setResource, findOne = _c.findOne, addLinks = _c.addLinks, removeLinks = _c.removeLinks, updateLinkPositions = _c.updateLinkPositions;
    var handleReload = function () {
        findOne(_resource === null || _resource === void 0 ? void 0 : _resource.id);
    };
    var _d = (0, frontend_js_1.useResource)({
        url: foreignUrl,
        name: 'document'
    }), foreignResource = _d.resource, setForeignResource = _d.setResource;
    (0, react_1.useEffect)(function () {
        if (_resource) {
            setResource(_resource);
        }
    }, [_resource]);
    var handleDrop = function (sorted) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            updateLinkPositions(resource === null || resource === void 0 ? void 0 : resource.id, sorted);
            return [2 /*return*/];
        });
    }); };
    var _e = (0, react_1.useState)(false), open = _e[0], setOpen = _e[1];
    var handleAddClick = function () {
        setForeignResource({});
        setOpen(true);
    };
    var handleEdit = function (res) {
        setForeignResource(res);
        setOpen(true);
    };
    var handleDelete = function (res) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, removeLinks(resource === null || resource === void 0 ? void 0 : resource.id, [res.id])];
                case 1:
                    _a.sent();
                    handleReload();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSuccess = function (res) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, addLinks(resource === null || resource === void 0 ? void 0 : resource.id, [res === null || res === void 0 ? void 0 : res.id])];
                case 1:
                    response = _a.sent();
                    if (response === null || response === void 0 ? void 0 : response.id) {
                        handleReload();
                        setOpen(false);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var documentLinks = (_a = resource === null || resource === void 0 ? void 0 : resource.document_links) === null || _a === void 0 ? void 0 : _a.filter(function (link) { var _a; return ((_a = link === null || link === void 0 ? void 0 : link.target) === null || _a === void 0 ? void 0 : _a.content_type) === contentType; });
    if (!(resource === null || resource === void 0 ? void 0 : resource.id))
        return null;
    return (react_1.default.createElement(material_1.Stack, { direction: 'column', spacing: 0.5 },
        react_1.default.createElement(components_1.InputLabel, { label: label }),
        react_1.default.createElement(SortableDocumentLinks_1.default, { documentLinks: documentLinks, handleDrop: handleDrop, handleEdit: handleEdit, handleDelete: handleDelete }),
        react_1.default.createElement(material_1.Button, { fullWidth: true, onClick: handleAddClick, variant: 'contained', color: 'secondary', startIcon: react_1.default.createElement(components_1.Icon, { name: "Plus", size: 20, color: 'secondary.contrastText' }) },
            "Add ",
            contentType),
        react_1.default.createElement(components_1.RemoteFormModal, { open: open, handleClose: function () { return setOpen(false); }, url: foreignUrl, resource: foreignResource, handleSuccess: handleSuccess })));
};
exports.default = ReferenceInput;
