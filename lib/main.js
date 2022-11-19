'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const useQuery = (queryFn, deps) => {
    const isLoading = vue.ref(false);
    const data = vue.ref();
    const error = vue.ref('');
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
    vue.onMounted(() => {
        fetchData();
    });
    vue.watch(() => deps, () => {
        fetchData();
    }, { deep: true });
    return {
        isLoading, data, error, fetchData
    };
};

const useMutation = (mutateFn, options) => {
    const isLoading = vue.ref(false);
    const data = vue.ref();
    const error = vue.ref('');
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

exports.useMutation = useMutation;
exports.useQuery = useQuery;
//# sourceMappingURL=main.js.map
