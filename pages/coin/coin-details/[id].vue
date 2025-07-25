<template>
  <div>
    <h3>Coin Details Page</h3>
    <pre lang="json">
      {{JSON.stringify(data, null, 2)}}
    </pre>
  </div>
</template>

<script lang="ts" setup>

  const id = useRoute().params.id;
  const { data } = await useFetch(`/api/ticker/?id=${id}`);
</script>

<style>

</style>