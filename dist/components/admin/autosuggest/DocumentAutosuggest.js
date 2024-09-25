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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var hooks_2 = require("../../../hooks");
var DocumentAutosuggest = function (props) {
    var errors = props.errors, value = props.value, _a = props.name, name = _a === void 0 ? 'document_id' : _a, collectionId = props.collectionId, label = props.label, handleChange = props.handleChange, _b = props.valueParam, valueParam = _b === void 0 ? 'id' : _b, _c = props.placeholder, placeholder = _c === void 0 ? 'Select' : _c, _d = props.direction, direction = _d === void 0 ? 'column' : _d;
    var apiUrl = (0, hooks_2.useAdmin)().apiUrl;
    var _e = (0, hooks_1.useCollections)(), collection = _e.collection, findCollection = _e.findCollection;
    (0, react_1.useEffect)(function () {
        if (collectionId) {
            findCollection(collectionId);
        }
    }, [collectionId]);
    if (!collection || !apiUrl)
        return null;
    return (react_1.default.createElement(components_1.RemoteAutosuggest, { enableClear: true, direction: direction, errors: errors, name: name, label: label, value: value, displayField: "title", valueParam: valueParam, url: "".concat(apiUrl, "/cms/").concat(collection === null || collection === void 0 ? void 0 : collection.name), placeholder: placeholder, handleChange: handleChange }));
};
exports.default = DocumentAutosuggest;
