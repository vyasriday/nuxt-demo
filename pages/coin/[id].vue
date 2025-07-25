<template>
  <div>
    <h3>Currency Page</h3>
  </div>
</template>

<script lang="ts" setup>
  const id = useRoute().params.id;
  console.log('Currency ID:', id);
</script>

<style>

</style>