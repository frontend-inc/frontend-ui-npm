'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminShipmentItem_1 = __importDefault(require("./AdminShipmentItem"));
var AdminShipmentToolbar_1 = __importDefault(require("./AdminShipmentToolbar"));
var AdminShipmentForm_1 = __importDefault(require("./AdminShipmentForm"));
var AdminShipmentsList = function (props) {
    var orderId = (props || {}).orderId;
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { url: "".concat(apiUrl, "/orders/").concat(orderId, "/shipments"), name: 'shipment', enableSearch: true, enableCreate: true, enableEdit: true, query: {
            sort_by: 'created_at',
            sort_direction: 'desc',
        }, component: AdminShipmentItem_1.default, edit: AdminShipmentForm_1.default, create: AdminShipmentForm_1.default, toolbar: AdminShipmentToolbar_1.default, emptyIcon: "Package", emptyTitle: "No shipments", emptyDescription: "No shipments yet." }));
};
exports.default = AdminShipmentsList;
