"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var FilterForm_1 = __importDefault(require("./FilterForm"));
var icons_material_1 = require("@mui/icons-material");
var lucide_react_1 = require("lucide-react");
var FilterMenu = function (props) {
  var open = props.open,
    anchorEl = props.anchorEl,
    query = props.query,
    fields = props.fields,
    handleChange = props.handleChange,
    handleClearFilters = props.handleClearFilters,
    handleSearch = props.handleSearch;
  return react_1.default.createElement(
    material_1.Popover,
    {
      id: "filter-popover",
      open: open,
      anchorEl: anchorEl,
      onClose: handleSearch,
      sx: sx.popover,
      TransitionComponent: material_1.Fade,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center",
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    },
    react_1.default.createElement(
      material_1.Box,
      { sx: sx.root },
      react_1.default.createElement(
        material_1.Box,
        { sx: sx.header },
        react_1.default.createElement(
          material_1.Box,
          null,
          react_1.default.createElement(icons_material_1.FilterList, {
            color: "primary",
            sx: sx.icon,
          })
        ),
        react_1.default.createElement(
          material_1.Typography,
          { variant: "caption", color: "textSecondary" },
          "Search filters"
        )
      ),
      react_1.default.createElement(
        material_1.Box,
        { sx: sx.content },
        react_1.default.createElement(FilterForm_1.default, {
          query: query,
          fields: fields,
          handleChange: handleChange,
          handleClearFilters: handleClearFilters,
          handleSearch: handleSearch,
        }),
        react_1.default.createElement(
          material_1.Button,
          {
            sx: sx.searchButton,
            startIcon: react_1.default.createElement(
              lucide_react_1.Search,
              null
            ),
            onClick: handleSearch,
            fullWidth: true,
            variant: "contained",
            color: "primary",
          },
          "Search"
        )
      )
    )
  );
};
exports.default = FilterMenu;
var sx = {
  root: {
    maxWidth: 420,
    bgcolor: "background.default",
    width: ["280px", "auto"],
  },
  content: {
    p: 2,
  },
  header: {
    display: "flex",
    flexDirecton: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 46,
    py: 0,
    px: 2,
    borderBottom: "1px solid",
    borderColor: "divider",
  },
  popover: {
    zIndex: function (theme) {
      return theme.zIndex.modal;
    },
  },
  icon: {
    height: 20,
    width: 20,
    mr: 10,
  },
  searchButton: {
    mt: 1,
  },
};
