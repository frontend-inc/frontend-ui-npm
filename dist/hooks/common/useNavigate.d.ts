type UseNavigateParams = {
    handleClick?: (ev?: any) => void;
};
declare const useNavigate: (params?: UseNavigateParams) => (path?: string) => void;
export default useNavigate;
