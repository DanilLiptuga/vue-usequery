# vue-usequery = A simple tiny query library for VueJS 

## Installation
```
npm i git@github.com:DanilLiptuga/vue-usequery.git
```

## Basic usage
Create query request using useQuery hook:
```
import {useQuery} from "vue-usequery";

const fetchProduct =  async (id: number) => {
    const response = await fetch(`https://api.com/products/${id}`)
    return await response.json();
}
export const useSingleProductQuery = (id: number) => useQuery(() => fetchProduct(id))
```
Usage of query request:
```
<template>
  <div v-if="isLoading">
    Loading...
  </div>
  <product-single v-else :product="data" />
</template>

<script setup>
import {useRoute} from "vue-router/dist/vue-router";
import ProductSingle from "@/components/products/product-single";
import {useSingleProduct} from "@/hooks/useSingleProduct";

const router = useRoute();
const {isLoading, data, error} = useSingleProduct(router.params.id)
</script>
```
## useQuery
useQuery hook allows us to fetch data by query function and retrieve data, loading status and errors easily. Also it can retrieve dependecies array or single dependency as "ref" ojbect, and automatically refetch data with new properties after changes in dependencies.

### useQuery example with auto refetch (TypeScript)
Query request for search results:
```
import {Ref} from 'vue';
import {useQuery} from "vue-usequery";
export const useProductsSearch = (search: Ref<string>, page:Ref<number>, deps: Ref[]|Ref) => {
    return useQuery(()=>fetchProductsSearch(search.value, page.value), deps);
}
const fetchProductsSearch = async (search: string, page: number) => {
    const respone = await fetch(`https://api.com/products/search?q=${search}&page=${page}`)
    return await respone.json();
}
```
Usage of query request:
```
<script lang="ts" setup>
import {useProductsSearch} from "@/hooks/useProductsSearch";
import { ref} from "vue";
const page = ref(1);
const searchString = ref('');
let {isLoading, data: products, error} = useProductsSearch(searchString, page, [searchString, page]);
const changeSearchString = (value: string) => {
  searchString.value = value;
}
const changePage = (value: number) => {
  page.value = value;
}
</script>
```
useQuery will call automatic refetch with new values of page and searchString after any of the dependencies have been changed
