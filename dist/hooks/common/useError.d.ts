type UseErrorProps = {
    errors: Record<string, string>;
    name: string;
};
declare const useError: (props: UseErrorProps) => {
    error: string;
    clearError: () => void;
};
export default useError;
