'use client';
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var hooks_1 = require("../../../hooks");
var navigation_1 = require("next/navigation");
var AdminCollectionMenu_1 = __importDefault(require("./AdminCollectionMenu"));
var documents_1 = require("../documents");
var frontend_shadcn_1 = require("frontend-shadcn");
var AdminCollectionPage = function () {
    (0, hooks_1.useTabs)('collections');
    var collectionId = (0, navigation_1.useParams)().collection_id;
    if (collectionId == 'index')
        collectionId = undefined;
    var _a = (0, hooks_1.useAdminCollections)(), collection = _a.collection, findCollection = _a.findCollection;
    (0, react_1.useEffect)(function () {
        if (collectionId) {
            findCollection(collectionId);
        }
    }, [collectionId]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.AdminLayoutLeft, null,
            react_1.default.createElement(AdminCollectionMenu_1.default, null)),
        react_1.default.createElement(components_1.AdminLayoutCenter, null,
            react_1.default.createElement(components_1.AdminHeader, { enableExpandLeftPanel: true }),
            react_1.default.createElement(frontend_shadcn_1.ScrollArea, null,
                react_1.default.createElement("div", { className: "w-full p-4" }, collection ? (react_1.default.createElement(documents_1.AdminDocumentsList, { documentType: collection === null || collection === void 0 ? void 0 : collection.document_type, metafields: collection === null || collection === void 0 ? void 0 : collection.fields, collectionId: collectionId })) : (react_1.default.createElement(components_2.Placeholder, { icon: "Database", title: "No collection.", description: "Select or create a CMS collection." })))))));
};
exports.default = AdminCollectionPage;
