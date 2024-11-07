type UseNavigateParams = {
    url?: string;
    path?: string;
    handleClick?: (ev?: any) => void;
};
declare const useNavigate: (params?: UseNavigateParams) => (path?: string) => void;
export default useNavigate;
