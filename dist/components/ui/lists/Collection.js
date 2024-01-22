"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../../hooks");
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var material_2 = require("@mui/material");
var context_1 = require("../../../context");
var index_1 = require("../../../constants/index");
var navigation_1 = require("next/navigation");
var Collection = function (props) {
  var router = (0, navigation_1.useRouter)();
  var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
  var title = props.title,
    _a = props.layout,
    layout = _a === void 0 ? "grid" : _a,
    _b = props.style,
    style = _b === void 0 ? "card" : _b,
    url = props.url,
    fields = props.fields,
    _c = props.query,
    defaultQuery = _c === void 0 ? {} : _c,
    _d = props.perPage,
    perPage = _d === void 0 ? 20 : _d,
    editing = props.editing,
    _e = props.enableSearch,
    enableSearch = _e === void 0 ? false : _e,
    _f = props.enableFilters,
    enableFilters = _f === void 0 ? false : _f,
    _g = props.enableSortTitle,
    enableSortTitle = _g === void 0 ? false : _g,
    _h = props.enableSortPrice,
    enableSortPrice = _h === void 0 ? false : _h,
    _j = props.enableInfiniteLoad,
    enableInfiniteLoad = _j === void 0 ? false : _j,
    _k = props.enableLoadMore,
    enableLoadMore = _k === void 0 ? true : _k,
    navigateUrl = props.navigateUrl,
    buttonText = props.buttonText,
    _l = props.autoPlay,
    autoPlay = _l === void 0 ? false : _l,
    _m = props.arrows,
    arrows = _m === void 0 ? false : _m,
    _o = props.showDots,
    showDots = _o === void 0 ? true : _o,
    _p = props.enableBorder,
    enableBorder = _p === void 0 ? false : _p,
    _q = props.enableGradient,
    enableGradient = _q === void 0 ? false : _q;
  var _r = (0, hooks_1.useResource)({
      url: url,
    }),
    loading = _r.loading,
    query = _r.query,
    findMany = _r.findMany,
    resources = _r.resources,
    page = _r.page,
    numPages = _r.numPages,
    loadMore = _r.loadMore;
  var _s = (0, react_1.useState)(""),
    keywords = _s[0],
    setKeywords = _s[1];
  var handleChange = function (ev) {
    setKeywords(ev.target.value);
  };
  var handleSearch = function (keywords) {
    findMany(
      __assign(__assign(__assign({}, defaultQuery), query), {
        keywords: keywords,
        page: 1,
        per_page: perPage,
      })
    );
  };
  var handleSortBy = function (sortBy) {
    findMany(__assign(__assign({}, query), { sort_by: sortBy }));
  };
  var handleSortDirection = function (sortDirection) {
    findMany(__assign(__assign({}, query), { sort_direction: sortDirection }));
  };
  var handleClick = function (item) {
    if (
      clientUrl &&
      navigateUrl &&
      (item === null || item === void 0 ? void 0 : item.handle)
    ) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      router.push(
        ""
          .concat(clientUrl)
          .concat(navigateUrl, "/")
          .concat(item === null || item === void 0 ? void 0 : item.handle)
      );
    }
  };
  var _t = (0, hooks_1.useFilters)({
      query: query,
      handleSubmit: findMany,
    }),
    activeFilters = _t.activeFilters,
    setActiveFilters = _t.setActiveFilters,
    handleAddFilter = _t.handleAddFilter;
  // Filter methods
  var handleClearFilters = function () {
    setActiveFilters([]);
    findMany({
      filters: {},
      keywords: "",
      page: 1,
      per_page: perPage,
    });
  };
  var handleFilter = function (filter) {
    handleAddFilter(filter);
  };
  (0, react_1.useEffect)(
    function () {
      if (url && defaultQuery && perPage) {
        findMany(__assign(__assign({}, defaultQuery), { per_page: perPage }));
      }
    },
    [url, defaultQuery, perPage]
  );
  return react_1.default.createElement(
    material_1.Stack,
    { spacing: 1, sx: sx.root },
    react_1.default.createElement(
      material_1.Stack,
      { direction: "row", justifyContent: "space-between", spacing: 1 },
      react_1.default.createElement(
        material_2.Typography,
        { variant: "h5", color: "textPrimary" },
        title
      ),
      react_1.default.createElement(
        material_1.Box,
        null,
        enableFilters &&
          react_1.default.createElement(components_1.ListFilterButton, {
            fields: fields,
            filters: activeFilters,
            handleFilter: handleFilter,
            handleClear: handleClearFilters,
          }),
        (enableSortTitle || enableSortPrice) &&
          react_1.default.createElement(components_1.ListSortButton, {
            sortBy: query === null || query === void 0 ? void 0 : query.sort_by,
            sortDirection:
              query === null || query === void 0
                ? void 0
                : query.sort_direction,
            fields: __spreadArray(
              __spreadArray(
                [],
                (enableSortTitle && [index_1.TITLE_SORT]) || [],
                true
              ),
              (enableSortPrice && [index_1.PRICE_SORT]) || [],
              true
            ),
            handleSortBy: handleSortBy,
            handleSortDirection: handleSortDirection,
          })
      )
    ),
    enableSearch &&
      react_1.default.createElement(components_1.SearchInput, {
        value: keywords,
        handleChange: handleChange,
        handleSearch: handleSearch,
      }),
    react_1.default.createElement(components_1.StyledList, {
      resources: resources,
      layout: layout,
      style: style,
      editing: editing,
      loading: loading,
      buttonText: buttonText,
      handleClick: handleClick,
      //@ts-ignore
      autoPlay: autoPlay,
      arrows: arrows,
      showDots: showDots,
      enableBorder: enableBorder,
      enableGradient: enableGradient,
    }),
    enableLoadMore &&
      react_1.default.createElement(components_1.LoadMore, {
        page: page,
        numPages: numPages,
        loadMore: loadMore,
        enableInfiniteLoad: enableInfiniteLoad,
      })
  );
};
exports.default = Collection;
var sx = {
  root: {
    width: "100%",
  },
};
