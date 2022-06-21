<template>
    <!-- <h2>Home</h2>
    <div class="row">
        <div class="col">Em construção ...</div>
    </div> -->

    <div class="container-fluid">
        <div class="row" v-if="categories">
            <div class="card" v-for="item in categories" :key="item.id" :value="item.id">
                <div class="imgProducts">
                    <img class="img" :src="item.image" alt="" />
                </div>
                <div class="card-body">
                    <p class="card-title"><span class="title">{{ item.title }}</span></p>
                    <p class="card-description">{{ item.description }}</p>
                    <p class="card-text title">
                        ${{ item.price }}
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import { useCategoriesStore } from "../stores/products";

const store = useCategoriesStore();
const categories = computed(() => store.categories);

onMounted(() => {
    store.listacategories();
})


</script>
