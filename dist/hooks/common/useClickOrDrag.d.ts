type ClickDragProps = {
    onClick?: (ev: any) => void;
    onDrag?: () => void;
};
export default function useClickOrDrag(props: ClickDragProps): {
    onMouseDown: (e: any) => void;
    onMouseUp: (e: any) => void;
};
export {};
