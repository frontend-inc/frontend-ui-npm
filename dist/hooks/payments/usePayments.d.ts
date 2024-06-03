type UsePaymentsProps = {
    url: string;
};
declare const usePayments: (props: UsePaymentsProps) => {
    loading: boolean;
    purchase: (itemId: any) => Promise<any>;
};
export default usePayments;
