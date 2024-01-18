type UseOAuthProps = {
    provider: string;
    onComplete: (code: string) => void;
};
declare const useOAuth: (props: UseOAuthProps) => void;
export default useOAuth;
