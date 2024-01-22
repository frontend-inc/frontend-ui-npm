"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var AccordionItem = function (props) {
  var title = props.title,
    description = props.description,
    image = props.image;
  return react_1.default.createElement(
    material_2.Accordion,
    { elevation: 0 },
    react_1.default.createElement(
      material_2.AccordionSummary,
      {
        expandIcon: react_1.default.createElement(
          icons_material_1.ExpandMore,
          null
        ),
      },
      react_1.default.createElement(
        material_1.Typography,
        { variant: "subtitle1" },
        title
      )
    ),
    react_1.default.createElement(
      material_2.AccordionDetails,
      null,
      react_1.default.createElement(
        material_1.Typography,
        { variant: "body1", color: "textSecondary" },
        description
      )
    )
  );
};
exports.default = AccordionItem;
