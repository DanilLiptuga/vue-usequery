import { mutateOptions } from "@/fetching/mutateOptions.type";
export declare const useMutation: (mutateFn: (...props: unknown[]) => unknown, options?: mutateOptions) => {
    isLoading: import("vue").Ref<boolean>;
    error: import("vue").Ref<string>;
    data: import("vue").Ref<unknown>;
    mutate: (...props: unknown[]) => Promise<void>;
};
