import { Ref } from 'vue';
export declare const useQuery: <T>(queryFn: () => Promise<T>, deps?: Ref[] | Ref) => {
    isLoading: Ref<boolean>;
    data: Ref<T>;
    error: Ref<string>;
    fetchData: () => Promise<void>;
};
