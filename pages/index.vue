<!-- @ts-nocheck -->
<template>
  <main>
    <h1>Index Page</h1>
    <table border="1" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coin in data?.data || []" :key="coin.id">
          <td>{{ coin.name }}</td>
          <td>{{ coin.symbol }}</td>
          <!-- @ts-ignore -->
          <td>${{ parseFloat(coin.price_usd).toFixed(2) }}</td>
          <td><NuxtLink :to="`/coin/coin-details/${coin.id}`">Details</NuxtLink></td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script setup>
//  nuxt will make this call on server side on first load but also duplicate it on client side after hydration.
// const data  = await $fetch(`https://api.coinlore.net/api/tickers/?limit=50`);
// here call is made on the server side using server api route and won't be duplicated.
const { data } = await useFetch(`/api/tickers/?limit=50`);
</script>

<style>

</style>