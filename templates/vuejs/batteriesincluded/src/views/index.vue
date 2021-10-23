<template>
  <div>
    <h1 class="text-xl font-bold">Thank you for using the Appwrite starter</h1>
  </div>
  <div>
    <p class="text-lg ml-2">\{{ counter }}</p>
    <button @click="add" class="border-black border rounded-lg px-2 py-1">+1</button>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {useStore} from '../store';

const store = useStore();
const counter = computed(() => store.counter);

function add() {
  store.$patch({
    counter: store.counter + 1,
  });
}
</script>

<style scoped></style>
