'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var __2 = require("../..");
var ProductReviewsList_1 = __importDefault(require("./ProductReviewsList"));
var ProductReviews = function (props) {
    var productId = props.productId, enableSearch = props.enableSearch, enableFilters = props.enableFilters, enableSorting = props.enableSorting, enableCreate = props.enableCreate;
    if (!productId)
        return null;
    return (react_1.default.createElement(__2.DataList, { url: "/api/v1/shop/products/".concat(productId, "/reviews"), name: "review", enableSearch: enableSearch, enableSorting: enableSorting, enableFilters: enableFilters, enableCreate: enableCreate, fields: [], sortOptions: [
            {
                label: 'Date',
                name: 'created_at',
            },
            {
                label: 'Rating',
                name: 'rating',
            },
        ], filterOptions: [
            {
                label: 'Rating',
                name: 'rating',
                options: [
                    { label: '1 Star', value: 1 },
                    { label: '2 Stars', value: 2 },
                    { label: '3 Stars', value: 3 },
                    { label: '4 Stars', value: 4 },
                    { label: '5 Stars', value: 5 }
                ]
            },
        ], list: ProductReviewsList_1.default, edit: __1.ProductReviewForm, create: __1.ProductReviewForm, slots: {
            toolbar: {
                buttonText: 'Add Product Review',
            },
        }, emptyTitle: "No reviews yet", emptyDescription: "Be the first to leave a review" }));
};
exports.default = ProductReviews;
