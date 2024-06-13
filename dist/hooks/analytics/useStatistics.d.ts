import { QueryParamsType } from 'frontend-js';
type UseStatisticsProps = {
    url: string;
};
declare const useStatistics: (props: UseStatisticsProps) => {
    loading: boolean;
    data: any;
    fetchData: (query: QueryParamsType) => Promise<any>;
};
export default useStatistics;
