"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_js_1 = require("frontend-js");
var useSubscriptions = function () {
    var api = (0, frontend_js_1.useApi)().api;
    var _a = (0, frontend_js_1.useResource)({
        name: 'subscription_plan',
        url: '/api/v1/subscription_plans',
    }), loading = _a.loading, delayedLoading = _a.delayedLoading, errors = _a.errors, subscriptionPlan = _a.resource, subscriptionPlans = _a.resources, findSubscriptionPlan = _a.findOne, findSubscriptionPlans = _a.findMany, handleChange = _a.handleChange, handleChangePage = _a.handleChangePage, reloadSubscriptionPlans = _a.reloadMany, query = _a.query, setQuery = _a.setQuery, page = _a.page, numPages = _a.numPages, perPage = _a.perPage, totalCount = _a.totalCount, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort, loadMore = _a.loadMore, loadingWrapper = _a.loadingWrapper, paginate = _a.paginate;
    // Pass the DB subscription_plan_id
    var subscribe = function (subscriptionPlanId) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return api.post("/api/v1/subscription_plans/".concat(subscriptionPlanId, "/subscribe"));
                    })];
                case 1: return [2 /*return*/, (_a.sent())];
            }
        });
    }); };
    var unsubscribe = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return api.post("/api/v1/subscription_plans/unsubscribe");
                    })];
                case 1: return [2 /*return*/, (_a.sent())];
            }
        });
    }); };
    return {
        loading: loading,
        delayedLoading: delayedLoading,
        errors: errors,
        subscriptionPlan: subscriptionPlan,
        subscriptionPlans: subscriptionPlans,
        findSubscriptionPlan: findSubscriptionPlan,
        findSubscriptionPlans: findSubscriptionPlans,
        subscribe: subscribe,
        unsubscribe: unsubscribe,
        handleChange: handleChange,
        handleChangePage: handleChangePage,
        reloadSubscriptionPlans: reloadSubscriptionPlans,
        query: query,
        setQuery: setQuery,
        page: page,
        numPages: numPages,
        perPage: perPage,
        totalCount: totalCount,
        sortBy: sortBy,
        sortDirection: sortDirection,
        handleSort: handleSort,
        loadMore: loadMore,
        loadingWrapper: loadingWrapper,
        paginate: paginate
    };
};
exports.default = useSubscriptions;
