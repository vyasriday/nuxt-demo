<template>
  <div>
    <h3>Coin Details Page</h3>
    <p v-if="pending">Loading...</p>
    <pre v-else lang="json">
      {{JSON.stringify(data, null, 2)}}
    </pre>
  </div>
</template>

<script lang="ts" setup>
  const id = useRoute().params.id;
  const { data, pending } = await useFetch(`/api/ticker/?id=${id}`, {lazy: true});

</script>

<style>

</style>