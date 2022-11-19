import {ref} from 'vue';
import {mutateOptions} from "@/fetching/mutateOptions.type";

export const useMutation = <T>(mutateFn: (...props : unknown[]) => Promise<T>, options?: mutateOptions) => {
    const isLoading = ref(false);
    const data = ref<T>();
    const error = ref('');
    const mutate = async (...props : unknown[]) => {
        try {
            isLoading.value = true;
            if (options?.onSettled)
                options.onSettled()
            const response = await mutateFn(...props);
            data.value = response;
            if (options?.onSuccess)
                options.onSuccess(response)
        } catch (e: any) {
            error.value = e
            if (options?.onError)
                options.onError(e)
        } finally {
            isLoading.value = false;
        }
    }
    return {
        isLoading, error, data, mutate
    };
}

