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
    var handle = props.handle;
    return (react_1.default.createElement(__2.DataList, { url: "/api/v1/shop/products/".concat(handle, "/reviews"), name: "review", enableSearch: true, enableSorting: true, enableFilters: true, fields: [], sortOptions: [
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
                field: 'rating',
                variant: 'ratings_scale',
            },
        ], enableCreate: true, enableEdit: true, enableDelete: true, list: ProductReviewsList_1.default, edit: __1.ProductReviewForm, create: __1.ProductReviewForm, slots: {
            toolbar: {
                buttonText: 'Add Product Review',
            },
        }, emptyTitle: "No reviews yet", emptyDescription: "Be the first to leave a review" }));
};
exports.default = ProductReviews;
var sx = {
    root: {
        py: 2,
        pb: 1.5,
        borderColor: 'divider',
    },
    reviewHeader: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
};
