import React from 'react';
import * as ResizablePrimitive from "react-resizable-panels";
declare const ResizablePanelGroup: ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => React.JSX.Element;
declare const ResizablePanel: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLElement | HTMLInputElement | HTMLScriptElement | HTMLDivElement | HTMLIFrameElement | HTMLObjectElement | HTMLLinkElement | HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLImageElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLMapElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPreElement | HTMLProgressElement | HTMLSlotElement | HTMLSelectElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTemplateElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | HTMLTableCaptionElement | HTMLMenuElement | HTMLPictureElement>, "id" | "onResize"> & {
    className?: string;
    collapsedSize?: number;
    collapsible?: boolean;
    defaultSize?: number;
    id?: string;
    maxSize?: number;
    minSize?: number;
    onCollapse?: ResizablePrimitive.PanelOnCollapse;
    onExpand?: ResizablePrimitive.PanelOnExpand;
    onResize?: ResizablePrimitive.PanelOnResize;
    order?: number;
    style?: object;
    tagName?: keyof HTMLElementTagNameMap;
} & {
    children?: React.ReactNode;
} & React.RefAttributes<ResizablePrimitive.ImperativePanelHandle>>;
declare const ResizableHandle: ({ withHandle, className, ...props }: Omit<React.HTMLAttributes<keyof HTMLElementTagNameMap>, "id" | "onFocus" | "onBlur"> & {
    className?: string;
    disabled?: boolean;
    hitAreaMargins?: ResizablePrimitive.PointerHitAreaMargins;
    id?: string;
    onBlur?: () => void;
    onDragging?: ResizablePrimitive.PanelResizeHandleOnDragging;
    onFocus?: () => void;
    style?: React.CSSProperties;
    tabIndex?: number;
    tagName?: keyof HTMLElementTagNameMap;
} & {
    children?: React.ReactNode;
} & {
    withHandle?: boolean;
}) => React.JSX.Element;
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
