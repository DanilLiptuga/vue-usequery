import {onMounted, Ref, ref, watch} from 'vue';

export const useQuery = (queryFn: () => Promise<unknown>, deps?: Ref[]|Ref) => {
    const isLoading = ref(false);
    const data = ref<unknown>(null);
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
        console.log(queryFn)
        fetchData()
    }, {deep: true})
    return {
        isLoading, data, error, fetchData
    };
}

