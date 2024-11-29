<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';

const books = ref([])

const fetchBooks = async () => {
  try {
    const response = await axios.get('http://localhost:3000/books')
    books.value = response.data.data
  } catch(err) {
    console.error(err)
  }
}

onMounted(() => {
  fetchBooks()
})
</script>

<template>
  <main class="container p-4 mx-auto">
    <section class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
      <div v-for="book in books" :key="book.id" class="p-4 border rounded shadow-sm">
        <img :src="book.imageBase64" :alt="book.title">
        <h3 class="text-xl font-semibold">{{ book.title }}</h3>
        <p>$ {{ book.price }}</p>
      </div>
    </section>
  </main>
</template>