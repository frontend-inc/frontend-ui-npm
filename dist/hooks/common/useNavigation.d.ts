type UseNavigationProps = {
    url: string;
};
declare const useNavigation: (props: UseNavigationProps) => {
    handleClick: (resource: any) => Promise<boolean>;
    handleShowClick: (resource: any) => Promise<boolean>;
    handleEditClick: (resource: any) => Promise<boolean>;
    handleAddClick: () => Promise<boolean>;
    toShow: (resource: any) => Promise<boolean>;
    toEdit: (resource: any) => Promise<boolean>;
    toAdd: () => Promise<boolean>;
};
export default useNavigation;
