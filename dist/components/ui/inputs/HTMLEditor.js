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
var react_2 = require("@tiptap/react");
var __1 = require("../..");
var starter_kit_1 = __importDefault(require("@tiptap/starter-kit"));
var extension_text_align_1 = __importDefault(require("@tiptap/extension-text-align"));
var frontend_shadcn_1 = require("frontend-shadcn");
var use_debounce_1 = require("use-debounce");
var MenuBar = function (_a) {
    var editor = _a.editor;
    if (!editor)
        return null;
    var headingLevels = [1, 2, 3];
    var textAlignOptions = [
        {
            label: 'Align Left',
            action: function () { return editor.chain().focus().setTextAlign('left').run(); },
            isActive: editor.isActive({ textAlign: 'left' }),
            icon: 'ri-align-left',
        },
        {
            label: 'Align Center',
            action: function () { return editor.chain().focus().setTextAlign('center').run(); },
            isActive: editor.isActive({ textAlign: 'center' }),
            icon: 'ri-align-center',
        },
        {
            label: 'Align Right',
            action: function () { return editor.chain().focus().setTextAlign('right').run(); },
            isActive: editor.isActive({ textAlign: 'right' }),
            icon: 'ri-align-right',
        },
    ];
    var headingOptions = headingLevels.map(function (level) { return ({
        label: "Heading ".concat(level),
        action: function () { return editor.chain().focus().toggleHeading({ level: level }).run(); },
        isActive: editor.isActive('heading', { level: level }),
        icon: "ri-h-".concat(level),
    }); });
    var formattingOptions = [
        {
            label: 'Paragraph',
            action: function () { return editor.chain().focus().setParagraph().run(); },
            isActive: editor.isActive('paragraph'),
            icon: 'ri-text',
        },
        {
            label: 'Bold',
            action: function () { return editor.chain().focus().toggleBold().run(); },
            isActive: editor.isActive('bold'),
            icon: 'ri-bold',
        },
        {
            label: 'Italic',
            action: function () { return editor.chain().focus().toggleItalic().run(); },
            isActive: editor.isActive('italic'),
            icon: 'ri-italic',
        },
        {
            label: 'Code Block',
            action: function () { return editor.chain().focus().toggleCodeBlock().run(); },
            isActive: editor.isActive('codeBlock'),
            icon: 'ri-code-box-line',
        },
    ];
    var listOptions = [
        {
            label: 'Bullet List',
            action: function () { return editor.chain().focus().toggleBulletList().run(); },
            isActive: editor.isActive('bulletList'),
            icon: 'ri-list-unordered',
        },
        {
            label: 'Ordered List',
            action: function () { return editor.chain().focus().toggleOrderedList().run(); },
            isActive: editor.isActive('orderedList'),
            icon: 'ri-list-ordered',
        },
        {
            label: 'Blockquote',
            action: function () { return editor.chain().focus().toggleBlockquote().run(); },
            isActive: editor.isActive('blockquote'),
            icon: 'ri-double-quotes-l',
        },
    ];
    var redoButtons = [
        {
            action: function () { return editor.chain().focus().undo().run(); },
            isActive: false,
            icon: 'ri-arrow-go-back-line',
            label: 'Undo',
        },
        {
            action: function () { return editor.chain().focus().redo().run(); },
            isActive: false,
            icon: 'ri-arrow-go-forward-line',
            label: 'Redo',
        },
    ];
    return (react_1.default.createElement("div", { className: "w-full md:min-w-[670px] p-2 bg-white rounded-xl shadow-lg flex flex-wrap space-x-2" },
        formattingOptions.map(function (btn, index) { return (react_1.default.createElement(__1.IconButton, { key: index, onClick: btn.action, disabled: !editor.can().chain().focus().run(), className: (0, frontend_shadcn_1.cn)('hover:bg-zinc-200', btn.isActive && 'bg-zinc-900 text-white'), "aria-label": btn.label },
            react_1.default.createElement(__1.RemixIcon, { name: btn.icon, className: (0, frontend_shadcn_1.cn)('text-zinc-900', btn.isActive && 'text-white') }))); }),
        headingOptions.map(function (btn, index) { return (react_1.default.createElement(__1.IconButton, { key: index, onClick: btn.action, disabled: !editor.can().chain().focus().run(), className: (0, frontend_shadcn_1.cn)('hover:bg-zinc-200', btn.isActive && 'bg-zinc-900 text-white'), "aria-label": btn.label },
            react_1.default.createElement(__1.RemixIcon, { name: btn.icon, className: (0, frontend_shadcn_1.cn)('text-zinc-900', btn.isActive && 'text-white') }))); }),
        listOptions.map(function (btn, index) { return (react_1.default.createElement(__1.IconButton, { key: index, onClick: btn.action, disabled: !editor.can().chain().focus().run(), className: (0, frontend_shadcn_1.cn)('hover:bg-zinc-200', btn.isActive && 'bg-zinc-900'), "aria-label": btn.label },
            react_1.default.createElement(__1.RemixIcon, { name: btn.icon, className: (0, frontend_shadcn_1.cn)('text-zinc-900', btn.isActive && 'text-white') }))); }),
        textAlignOptions.map(function (btn, index) { return (react_1.default.createElement(__1.IconButton, { key: index, onClick: btn.action, disabled: !editor.can().chain().focus().run(), className: (0, frontend_shadcn_1.cn)('hover:bg-zinc-200', btn.isActive && 'bg-zinc-900'), "aria-label": btn.label },
            react_1.default.createElement(__1.RemixIcon, { name: btn.icon, className: (0, frontend_shadcn_1.cn)('text-zinc-900', btn.isActive && 'text-white') }))); }),
        redoButtons.map(function (btn, index) { return (react_1.default.createElement(__1.IconButton, { key: index, onClick: btn.action, disabled: !editor.can().chain().focus().run(), className: (0, frontend_shadcn_1.cn)('hover:bg-zinc-200', btn.isActive && 'bg-zinc-900'), "aria-label": btn.label },
            react_1.default.createElement(__1.RemixIcon, { name: btn.icon, className: (0, frontend_shadcn_1.cn)('text-zinc-900', btn.isActive && 'bg-zinc-900 text-white') }))); })));
};
var HTMLEditor = function (props) {
    var _a = props || {}, label = _a.label, name = _a.name, value = _a.value, handleChange = _a.handleChange;
    var _b = (0, react_1.useState)(value || ''), text = _b[0], setText = _b[1];
    var debouncedText = (0, use_debounce_1.useDebounce)(text, 500)[0];
    var extensions = [
        starter_kit_1.default,
        extension_text_align_1.default.configure({
            types: ['heading', 'paragraph'],
            alignments: ['left', 'center', 'right', 'justify'],
        }),
    ];
    var editor = (0, react_2.useEditor)({
        extensions: extensions,
        content: value || '<p></p>',
        onUpdate: function (_a) {
            var editor = _a.editor;
            setText(editor === null || editor === void 0 ? void 0 : editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'cursor-text w-full prose outline-none focus:outline-none focus:ring-0 focus:outline-none',
            },
        },
    });
    (0, react_1.useEffect)(function () {
        if (handleChange) {
            handleChange({
                target: {
                    name: name,
                    value: debouncedText,
                },
            });
        }
    }, [handleChange, debouncedText]);
    var isInitialMount = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(function () {
        if (isInitialMount.current) {
            if (value) {
                setText(value);
            }
            isInitialMount.current = false;
        }
    }, [value]);
    (0, react_1.useEffect)(function () {
        if (editor && editor.getHTML() !== value) {
            editor.commands.setContent(value);
        }
    }, [value, editor]);
    return (react_1.default.createElement("div", { className: "w-full prose flex flex-col space-y-2" },
        editor && (react_1.default.createElement(react_2.BubbleMenu, { editor: editor },
            react_1.default.createElement(MenuBar, { editor: editor }))),
        react_1.default.createElement(react_2.EditorContent, { editor: editor })));
};
exports.default = HTMLEditor;
