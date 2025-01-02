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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = __importStar(require("react"));
var react_2 = require("@tiptap/react");
var __1 = require("../..");
var starter_kit_1 = __importDefault(require("@tiptap/starter-kit"));
var extension_text_align_1 = __importDefault(require("@tiptap/extension-text-align"));
var extension_bubble_menu_1 = __importDefault(require("@tiptap/extension-bubble-menu"));
var react_3 = require("@nextui-org/react");
var use_debounce_1 = require("use-debounce");
var MenuBar = function (props) {
    var editor = (props || {}).editor;
    //const { editor } = useCurrentEditor();
    if (!editor)
        return null;
    var buttons = __spreadArray(__spreadArray([
        {
            action: function () { return editor.chain().focus().setParagraph().run(); },
            isActive: editor.isActive('paragraph'),
            icon: 'ri-text',
            label: 'Paragraph',
        },
        {
            action: function () { return editor.chain().focus().toggleBold().run(); },
            isActive: editor.isActive('bold'),
            icon: 'ri-bold',
            label: 'Bold',
        },
        {
            action: function () { return editor.chain().focus().toggleItalic().run(); },
            isActive: editor.isActive('italic'),
            icon: 'ri-italic',
            label: 'Italic',
        },
        {
            action: function () { return editor.chain().focus().toggleCodeBlock().run(); },
            isActive: editor.isActive('codeBlock'),
            icon: 'ri-code-box-line',
            label: 'Code Block',
        }
    ], [1, 2, 3, 4, 5, 6].map(function (level) { return ({
        action: function () { return editor.chain().focus().toggleHeading({ level: level }).run(); },
        isActive: editor.isActive('heading', { level: level }),
        icon: "ri-h-".concat(level),
        label: "H".concat(level),
    }); }), true), [
        {
            action: function () { return editor.chain().focus().toggleBulletList().run(); },
            isActive: editor.isActive('bulletList'),
            icon: 'ri-list-unordered',
            label: 'Bullet List',
        },
        {
            action: function () { return editor.chain().focus().toggleOrderedList().run(); },
            isActive: editor.isActive('orderedList'),
            icon: 'ri-list-ordered',
            label: 'Ordered List',
        },
        {
            action: function () { return editor.chain().focus().toggleBlockquote().run(); },
            isActive: editor.isActive('blockquote'),
            icon: 'ri-double-quotes-l',
            label: 'Blockquote',
        },
        {
            action: function () { return editor.chain().focus().setTextAlign('left').run(); },
            isActive: editor.isActive({ textAlign: 'left' }),
            icon: 'ri-align-left',
            label: 'Align Left',
        },
        {
            action: function () { return editor.chain().focus().setTextAlign('center').run(); },
            isActive: editor.isActive({ textAlign: 'center' }),
            icon: 'ri-align-center',
            label: 'Align Center',
        },
        {
            action: function () { return editor.chain().focus().setTextAlign('right').run(); },
            isActive: editor.isActive({ textAlign: 'right' }),
            icon: 'ri-align-right',
            label: 'Align Right',
        },
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
    ], false);
    return (react_1.default.createElement("div", { className: "flex flex-wrap gap-2 mb-4" }, buttons.map(function (btn, index) { return (react_1.default.createElement(__1.IconButton, { key: index, onClick: btn.action, disabled: !editor.can().chain().focus().run(), className: (0, react_3.cn)(btn.isActive && 'bg-primary text-primary-foreground'), "aria-label": btn.label },
        react_1.default.createElement(__1.RemixIcon, { name: btn.icon, className: (0, react_3.cn)('text-foreground', btn.isActive && 'text-primary-foreground') }))); })));
};
var HTMLInput = function (props) {
    var _a = props || {}, label = _a.label, name = _a.name, value = _a.value, handleChange = _a.handleChange;
    var _b = (0, react_1.useState)(value || ''), text = _b[0], setText = _b[1];
    var debouncedText = (0, use_debounce_1.useDebounce)(text, 500)[0];
    // You can manually add css classes to the extensions
    // heading: { HTMLAttributes: { class: `pt-8 pb-4 text-2xl font-semibold text-foreground/70` } },
    var extensions = [
        starter_kit_1.default,
        extension_text_align_1.default.configure({
            types: ['heading', 'paragraph'],
            alignments: ['left', 'center', 'right', 'justify'],
        }),
        extension_bubble_menu_1.default.configure({
            pluginKey: 'bubbleMenu',
            element: document.createElement('div'),
        }),
    ];
    var editor = (0, react_2.useEditor)({
        extensions: extensions,
        content: value || '<p></p>', // Set initial content to the value prop
        onUpdate: function (_a) {
            var editor = _a.editor;
            // Trigger handleChange whenever the editor content changes
            setText(editor === null || editor === void 0 ? void 0 : editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'w-full prose prose-sm focus:outline-none p-2 border border-divider rounded-lg border-1 border-divider focus:ring-2 focus:ring-ring focus:ring-offset-3',
            },
        },
    });
    (0, react_1.useEffect)(function () {
        handleChange({
            target: {
                name: name,
                value: debouncedText,
            },
        });
    }, [debouncedText]);
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
    return (react_1.default.createElement("div", { className: "w-full prose prose-sm flex flex-col space-y-2" },
        label && react_1.default.createElement(__1.InputLabel, { label: label }),
        react_1.default.createElement(MenuBar, { editor: editor }),
        react_1.default.createElement(react_2.EditorContent, { editor: editor })));
};
exports.default = HTMLInput;
