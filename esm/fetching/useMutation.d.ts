import { mutateOptions } from "@/fetching/mutateOptions.type";
export declare const useMutation: <T>(mutateFn: (...props: unknown[]) => Promise<T>, options?: mutateOptions) => {
    isLoading: import("vue").Ref<boolean>;
    error: import("vue").Ref<string>;
    data: import("vue").Ref<T>;
    mutate: (...props: unknown[]) => Promise<void>;
};
