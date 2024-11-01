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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminDocumentInput = exports.AdminDocumentForm = exports.AdminDocumentRightPanel = exports.AdminDocumentPage = void 0;
__exportStar(require("./references"), exports);
__exportStar(require("./inputs"), exports);
var AdminDocumentPage_1 = require("./AdminDocumentPage");
Object.defineProperty(exports, "AdminDocumentPage", { enumerable: true, get: function () { return __importDefault(AdminDocumentPage_1).default; } });
var AdminDocumentRightPanel_1 = require("./AdminDocumentRightPanel");
Object.defineProperty(exports, "AdminDocumentRightPanel", { enumerable: true, get: function () { return __importDefault(AdminDocumentRightPanel_1).default; } });
var AdminDocumentForm_1 = require("./AdminDocumentForm");
Object.defineProperty(exports, "AdminDocumentForm", { enumerable: true, get: function () { return __importDefault(AdminDocumentForm_1).default; } });
var AdminDocumentInput_1 = require("./AdminDocumentInput");
Object.defineProperty(exports, "AdminDocumentInput", { enumerable: true, get: function () { return __importDefault(AdminDocumentInput_1).default; } });
