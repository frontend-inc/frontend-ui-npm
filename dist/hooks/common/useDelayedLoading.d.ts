interface UseDelayedLoadingProps {
    loading: boolean;
    delay?: number;
    callback?: () => void;
}
declare function useDelayedLoading({ loading, delay, }: UseDelayedLoadingProps): Record<any, boolean>;
export default useDelayedLoading;
