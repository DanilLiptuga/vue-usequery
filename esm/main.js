import { ref, onMounted, watch } from 'vue';

const useQuery = (queryFn, deps) => {
    const isLoading = ref(false);
    const data = ref(null);
    const error = ref('');
    const fetchData = async () => {
        try {
            isLoading.value = true;
            data.value = await queryFn();
        }
        catch (e) {
            error.value = e;
        }
        finally {
            isLoading.value = false;
        }
    };
    onMounted(() => {
        fetchData();
    });
    watch(() => deps, () => {
        console.log(queryFn);
        fetchData();
    }, { deep: true });
    return {
        isLoading, data, error, fetchData
    };
};

const useMutation = (mutateFn, options) => {
    const isLoading = ref(false);
    const data = ref(null);
    const error = ref('');
    const mutate = async (...props) => {
        try {
            isLoading.value = true;
            if (options?.onSettled)
                options.onSettled();
            const response = await mutateFn(...props);
            data.value = response;
            if (options?.onSuccess)
                options.onSuccess(response);
        }
        catch (e) {
            error.value = e;
            if (options?.onError)
                options.onError(e);
        }
        finally {
            isLoading.value = false;
        }
    };
    return {
        isLoading, error, data, mutate
    };
};

export { useMutation, useQuery };
//# sourceMappingURL=main.js.map
