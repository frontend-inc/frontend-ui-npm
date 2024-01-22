type PageNavigateProps = {
  baseUrl?: string;
};
declare const usePageNavigate: (props: PageNavigateProps) => {
  navigate: (item: any, page: any) => void;
};
export default usePageNavigate;
