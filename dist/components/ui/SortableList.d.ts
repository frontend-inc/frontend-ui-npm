import React from "react";
type SortableListProps = {
  items: any[];
  droppableId: string;
  renderItem: (item: any, index: number) => JSX.Element;
  handleDrop: (items: any[]) => void;
};
declare const SortableList: React.FC<SortableListProps>;
export default SortableList;
