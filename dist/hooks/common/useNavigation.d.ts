type UseNavigationProps = {
  url: string;
};
declare const useNavigation: (props: UseNavigationProps) => {
  handleClick: (resource: any) => void;
  handleShowClick: (resource: any) => void;
  handleEditClick: (resource: any) => void;
  handleAddClick: () => void;
  toShow: (resource: any) => void;
  toEdit: (resource: any) => void;
  toAdd: () => void;
};
export default useNavigation;
