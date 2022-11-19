import {onMounted, Ref, ref, watch} from 'vue';

export const useQuery = <T>(queryFn: () => Promise<T>, deps?: Ref[]|Ref) => {
    const isLoading = ref(false);
    const data = ref<T>();
    const error = ref('');
    const fetchData = async () => {
        try {
            isLoading.value = true;
            data.value = await queryFn();
        } catch (e: any) {
            error.value = e
        } finally {
            isLoading.value = false;
        }
    }
    onMounted(()=>{
        fetchData()
    })
    watch(()=>deps, ()=>{
        fetchData()
    }, {deep: true})
    return {
        isLoading, data, error, fetchData
    };
}

