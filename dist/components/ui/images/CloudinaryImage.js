"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lucide_react_1 = require("lucide-react");
var helpers_1 = require("../../../helpers");
var index_1 = require("../../../constants/index");
var components_1 = require("../../../components");
var CloudinaryImage = function (props) {
    var src = props.src, height = props.height, width = props.width;
    var fileExtension = src.split(".").pop();
    var imageUrl = src;
    //@ts-ignore
    if (index_1.VIDEO_FORMATS.includes(fileExtension)) {
        imageUrl = (0, helpers_1.imageFromVideoUrl)(src);
    }
    else {
        // convert all images to jpg to ensure that they render correctly
        imageUrl = src.substr(0, src.lastIndexOf(".")) + ".jpg";
    }
    var resizedImageUrl = (0, helpers_1.resize)(imageUrl, {
        width: width,
        height: height,
    });
    //@ts-ignore
    var isImageOrVideo = index_1.IMAGE_OR_VIDEO_FORMATS.includes(fileExtension);
    return isImageOrVideo ? (react_1.default.createElement(components_1.Image, { src: resizedImageUrl, height: height, 
        //@ts-ignore
        width: width })) : (react_1.default.createElement(lucide_react_1.File, { size: 20 }));
};
exports.default = CloudinaryImage;
