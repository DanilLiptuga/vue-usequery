import { Ref } from 'vue';
export declare const useQuery: (queryFn: () => Promise<unknown>, deps?: Ref[] | Ref) => {
    isLoading: Ref<boolean>;
    data: Ref<unknown>;
    error: Ref<string>;
    fetchData: () => Promise<void>;
};
